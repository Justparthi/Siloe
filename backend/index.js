const port = process.env.PORT || 4000;
const express = require("express");
const app = express();
const { Pool } = require('pg');
const jwt = require("jsonwebtoken");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(cors());

// PostgreSQL connection
const pool = new Pool({
  user: 'ecomdb_owner',
  host: 'ep-yellow-rice-a542ntu9.us-east-2.aws.neon.tech',
  database: 'ecomdb',
  password: 'M2PyoIiHzSB8',
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // Only use in development, consider using a proper certificate in production
  },
});

// API
app.get('/', (req, res) => {
  res.send("Express App is Running")
});

// Image storage
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
});

const upload = multer({storage: storage});

// Upload image
app.use('/images', express.static('upload/images'));

app.post('/upload', upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  });
});

// Create tables
const createTables = async () => {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        new_price NUMERIC NOT NULL,
        old_price NUMERIC NOT NULL,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        available BOOLEAN DEFAULT TRUE
      );

      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        cart_data JSONB,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Tables created successfully');
  } catch (err) {
    console.error('Error creating tables', err);
  } finally {
    client.release();
  }
};

createTables();

// Add product
app.post('/addproduct', async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO products (name, image, category, new_price, old_price) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [req.body.name, req.body.image, req.body.category, req.body.new_price, req.body.old_price]
    );
    res.json({
      success: true,
      id: result.rows[0].id,
      name: req.body.name,
    });
  } catch (err) {
    console.error('Error adding product', err);
    res.status(500).json({ success: false, error: 'Failed to add product' });
  } finally {
    client.release();
  }
});

// Remove product
app.post('/removeproduct', async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query('DELETE FROM products WHERE id = $1', [req.body.id]);
    res.json({
      success: true,
      name: req.body.name
    });
  } catch (err) {
    console.error('Error removing product', err);
    res.status(500).json({ success: false, error: 'Failed to remove product' });
  } finally {
    client.release();
  }
});

// Get all products
app.get('/allproducts', async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching products', err);
    res.status(500).json({ success: false, error: 'Failed to fetch products' });
  } finally {
    client.release();
  }
});

// User signup
app.post('/signup', async (req, res) => {
  const client = await pool.connect();
  try {
    const checkUser = await client.query('SELECT * FROM users WHERE email = $1', [req.body.email]);
    if (checkUser.rows.length > 0) {
      return res.status(400).json({ success: false, errors: "Existing User" });
    }

    const cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const result = await client.query(
      'INSERT INTO users (name, email, password, cart_data) VALUES ($1, $2, $3, $4) RETURNING id',
      [req.body.username, req.body.email, req.body.password, JSON.stringify(cart)]
    );

    const token = jwt.sign({ user: { id: result.rows[0].id } }, 'secret_ecom');
    res.json({ success: true, token });
  } catch (err) {
    console.error('Error signing up user', err);
    res.status(500).json({ success: false, error: 'Failed to sign up' });
  } finally {
    client.release();
  }
});

// User login
app.post('/login', async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM users WHERE email = $1', [req.body.email]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const passCompare = req.body.password === user.password;
      if (passCompare) {
        const token = jwt.sign({ user: { id: user.id } }, 'secret_ecom');
        res.json({ success: true, token });
      } else {
        res.json({ success: false, errors: "Wrong Password" });
      }
    } else {
      res.json({ success: false, errors: 'Wrong Email Id' });
    }
  } catch (err) {
    console.error('Error logging in user', err);
    res.status(500).json({ success: false, error: 'Failed to log in' });
  } finally {
    client.release();
  }
});

// Fetch new collections
app.get('/newcollections', async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM products ORDER BY date DESC LIMIT 8');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching new collections', err);
    res.status(500).json({ success: false, error: 'Failed to fetch new collections' });
  } finally {
    client.release();
  }
});

// Fetch popular women's products
app.get('/popularwomen', async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM products WHERE category = 'women' LIMIT 4");
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching popular women products', err);
    res.status(500).json({ success: false, error: 'Failed to fetch popular women products' });
  } finally {
    client.release();
  }
});

// Middleware to fetch user
const fetchUser = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send({ errors: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, 'secret_ecom');
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ errors: "Please authenticate using a valid token" });
  }
};

// Add to cart
app.post('/addtocart', fetchUser, async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT cart_data FROM users WHERE id = $1', [req.user.id]);
    let cartData = result.rows[0].cart_data;
    cartData[req.body.itemId] = (cartData[req.body.itemId] || 0) + 1;
    await client.query('UPDATE users SET cart_data = $1 WHERE id = $2', [JSON.stringify(cartData), req.user.id]);
    res.send("Added");
  } catch (err) {
    console.error('Error adding to cart', err);
    res.status(500).json({ success: false, error: 'Failed to add to cart' });
  } finally {
    client.release();
  }
});

// Remove from cart
app.post('/removefromcart', fetchUser, async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT cart_data FROM users WHERE id = $1', [req.user.id]);
    let cartData = result.rows[0].cart_data;
    if (cartData[req.body.itemId]) {
      cartData[req.body.itemId] -= 1;
    }
    await client.query('UPDATE users SET cart_data = $1 WHERE id = $2', [JSON.stringify(cartData), req.user.id]);
    res.send("Removed");
  } catch (err) {
    console.error('Error removing from cart', err);
    res.status(500).json({ success: false, error: 'Failed to remove from cart' });
  } finally {
    client.release();
  }
});

// Get cart
app.post('/getcart', fetchUser, async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT cart_data FROM users WHERE id = $1', [req.user.id]);
    res.json(result.rows[0].cart_data);
  } catch (err) {
    console.error('Error getting cart', err);
    res.status(500).json({ success: false, error: 'Failed to get cart' });
  } finally {
    client.release();
  }
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log(`Error ${error}`);
  }
}); 