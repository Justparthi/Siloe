# 🛍️ Siloe - Modern eCommerce Platform

Welcome to **Siloe**, a full-featured eCommerce platform built with React.js, PostgreSQL, and secured with JWT authentication. This application provides a seamless shopping experience with secure payments via Razorpay integration.

## 🚀 Features

- **User Authentication**: Secure JWT-based authentication system
- **Product Management**: Add, update, and manage products with ease
- **Shopping Cart**: Real-time cart updates and management
- **Payment Integration**: Secure checkout with Razorpay
- **Order Tracking**: Complete order history and tracking
- **User Profiles**: Customizable user profiles with order history
- **Admin Dashboard**: Comprehensive admin controls for product and order management
- **Responsive Design**: Seamless experience across all devices

## 🛠 Tech Stack

- **Frontend**
  - React.js
  - Redux for state management
  - Axios for API calls
  - Bootstrap for styling
  
- **Backend**
  - Node.js/Express.js
  - PostgreSQL database
  - JWT for authentication
  - Razorpay payment gateway

## 📦 Installation

1. **Clone the Repository**
```bash
git clone https://github.com/Justparthi/Siloe.git
cd postecom
```

2. **Install Dependencies**

Frontend:
```bash
cd frontend
npm install
```

Backend:
```bash
cd backend
npm install
```

3. **Environment Variables**

Create `.env` files in both frontend and backend directories:

Frontend `.env`:
```plaintext
REACT_APP_API_URL=http://localhost:5000
REACT_APP_RAZORPAY_KEY_ID=<your-razorpay-key-id>
```

Backend `.env`:
```plaintext
PORT=5000
DATABASE_URL=<your-postgresql-url>
JWT_SECRET=<your-jwt-secret>
RAZORPAY_KEY_ID=<your-razorpay-key-id>
RAZORPAY_KEY_SECRET=<your-razorpay-key-secret>
```

4. **Database Setup**
```bash
cd backend
npm run migrate
```

5. **Run the Application**

Frontend:
```bash
cd frontend
npm start
```

Backend:
```bash
cd backend
npm run dev
```

The application will be running at `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

## 🗂️ Project Structure

```plaintext
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   └── utils/
│   └── public/
└── backend/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    └── utils/
```

## 🧩 Key Components

### Frontend
- **ProductList**: Displays products with filtering and sorting
- **Cart**: Shopping cart management
- **Checkout**: Payment processing with Razorpay
- **UserDashboard**: Order history and profile management
- **AdminPanel**: Product and order management for admins

### Backend
- **Auth Controller**: Handles user authentication and JWT
- **Product Controller**: Product CRUD operations
- **Order Controller**: Order processing and management
- **Payment Controller**: Razorpay integration and payment processing

## 💳 Payment Integration

1. **Razorpay Setup**
   - Create a Razorpay account
   - Get API keys from the dashboard
   - Add keys to environment variables

2. **Implementation**
   - Initialize Razorpay in checkout component
   - Handle payment success/failure
   - Verify payment signature on backend

## 🔐 Authentication Flow

1. **Registration**
   - User submits registration form
   - Password hashing
   - JWT token generation
   
2. **Login**
   - Credential verification
   - JWT token generation and storage
   
3. **Protected Routes**
   - JWT verification middleware
   - Role-based access control

## 📱 API Endpoints

### Auth Routes
```plaintext
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile
```

### Product Routes
```plaintext
GET    /api/products
GET    /api/products/:id
POST   /api/products    (Admin)
PUT    /api/products/:id (Admin)
DELETE /api/products/:id (Admin)
```

### Order Routes
```plaintext
POST   /api/orders
GET    /api/orders
GET    /api/orders/:id
```

## 🚀 Deployment

1. **Frontend Deployment (Vercel)**
   - Build the React application
   - Configure environment variables
   - Deploy the build folder

2. **Backend Deployment (render)**
   - Configure Procfile
   - Set environment variables
   - Deploy the backend application

3. **Database Setup**
   - Set up PostgreSQL instance
   - Run migrations
   - Configure connection string

## 🔧 Error Handling

The application implements comprehensive error handling:
- Frontend axios interceptors
- Backend error middleware
- Payment failure handling
- Network error recovery

## 📜 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For any queries or support:
- Open an issue
- Contact: support@siloe.com
- Documentation: [Wiki](https://github.com/username/shopsmart/wiki)
