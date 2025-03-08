import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase_init_";
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [success, setSuccess]= useState(false)
    const [loginError, setLoginEoor]=useState('')
    const handleLogin = (e)=>{
        e.preventDefault()
       const email = e.target.email.value;
       const password = e.target.password.value;
       setSuccess(false)
       setLoginEoor('')
       signInWithEmailAndPassword(auth, email, password)
       .then(result =>{
        console.log(result.user);
        setSuccess(true)
        
       })
       .catch(error =>{
        console.log(error);
        setLoginEoor(error.message)
        
       })
        
        
    }
    return (
     
   <div className="flex items-center justify-center">
    
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-2xl text-center">Login Now</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input  type="password" name="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 bg-accent">Login</button>
                        {
                            success && <p className="text-center text-green-600">User login success</p>
                        }
                        {
                            loginError && <p className="text-center text-red-700">{loginError}</p>
                        }
                        <p className="text-center text-lg">Nwe to this website<Link className="text-green-700 underline" to={'/signup'}>Sign Up</Link></p>
                    </fieldset>
                </form>
            </div>
   </div>
  
    );
};

export default Login;