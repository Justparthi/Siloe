import React, { useState } from 'react';

const LoginSign = () => {
    const [state, setState] = useState("Login");

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const login = async () => {
        console.log("Login Function Executed", formData);
        let responseData;
        await fetch(`https://postecom-backend.onrender.com/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData = data);

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace('/');
        } else {
            alert(responseData.errors);
        }
    };

    const signup = async () => {
        console.log("SignUp function executed", formData);
        let responseData;
        await fetch(`https://postecom-backend.onrender.com/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData = data);

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace('/');
        } else {
            alert(responseData.errors);
        }
    };

    return (
        <div className='loginsignup'>
            <section className="bodypg">
                <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                    <div className="row align-items-center g-lg-5 py-5">
                        <div className="col-lg-7 text-center text-lg-start">
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Welcome Back!</h1>
                            <p className="col-lg-10 fs-4">Please sign in to access your account.</p>
                        </div>
                        <div className="col-md-10 mx-auto col-lg-5">
                            <div className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                                {state === "Sign Up" ? (
                                    <div className="form-floating mb-3">
                                        <input type="text" value={formData.username} onChange={changeHandler} className="form-control" name="username" id="floatingInput" placeholder="Username" />
                                        <label htmlFor="floatingInput">Username</label>
                                    </div>
                                ) : null}
                                <div className="form-floating mb-3">
                                    <input type="email" value={formData.email} onChange={changeHandler} className="form-control" name="email" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" value={formData.password} onChange={changeHandler} name="password" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me" /><small className="text-body-secondary">&nbsp;By clicking Sign up, you agree to the terms of use.</small>
                                    </label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
                                <hr className="my-4" />
                                <p className="text-body-secondary">
                                    {state === "Sign Up" ? (
                                        <>Already have an account? &nbsp;
                                            <button 
                                                style={{ cursor: "pointer", color: "red", background: "none", border: "none", padding: 0 }}
                                                onClick={() => setState("Login")}
                                                aria-label="Login"
                                            >
                                                Login here
                                            </button>
                                        </>
                                    ) : (
                                        <>Don't have an account yet? &nbsp;
                                            <button 
                                                style={{ cursor: "pointer", color: "red", background: "none", border: "none", padding: 0 }}
                                                onClick={() => setState("Sign Up")}
                                                aria-label="Register"
                                            >
                                                Register!
                                            </button>
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LoginSign;
