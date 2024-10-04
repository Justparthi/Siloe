import React, { useState } from 'react';
const port = process.env.PORT || 4000

const LoginSign = () => {


    const [state, setState] = useState("Login")

    const [formData, setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async () => {
        console.log("Login Function Executed", formData)
        let responseData;
        await fetch(`http://localhost:${port}/login`,{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace('/');
        }
        else{
            alert(responseData.errors)
        }
    }

    const signup = async () => {
        console.log("SignUp function executed", formData)
        let responseData;
        await fetch(`http://localhost:${port}/signup`,{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace('/');
        }
        else{
            alert(responseData.errors)
        }
    }

    return (
        <div className='loginsignup'>
            

            <section class="bodypg">  
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Welcome Back!

        </h1>
        <p class="col-lg-10 fs-4">Please sign in to access your account.</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <div class="p-4 p-md-5 border rounded-3 bg-body-tertiary">

            {state === "Sign Up" ? <div class="form-floating mb-3">
            <input type="text" value={formData.username} onChange={changeHandler} class="form-control" name="username" id="floatingInput" placeholder="Username"/>
            <label for="floatingInput">Username</label>
          </div> : <></> }

        

          <div class="form-floating mb-3">
            <input type="email" value={formData.email} onChange={changeHandler} class="form-control" name="email" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" value={formData.password} onChange={changeHandler} name="password" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/><small class="text-body-secondary">&nbsp;By clicking Sign up, you agree to the terms of use.</small>
            </label>
          </div>

          <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={() => {state === "Login" ? login() : signup()}}>Continue</button>
          <hr class="my-4"/>
          {state === "Sign Up" ? 
          <p class="text-body-secondary">Already have an account? &nbsp;<a style={{cursor:"pointer", color:"red"}} onClick={() => {setState("Login")}}>Login here</a></p> : 
          <p class="text-body-secondary">Don't have an account yet? &nbsp;<a style={{cursor:"pointer", color:"red"}} onClick={() => {setState("Sign Up")}}>Register !</a></p>}
          
          
        </div>
      </div>
    </div>
  </div>

  
</section>



            
        </div>
    );
}

export default LoginSign;
