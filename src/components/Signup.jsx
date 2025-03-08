import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../firebase_init_';
import { LuGoal } from 'react-icons/lu';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [success, setSuccess]=useState(false)
    const [errormessage, setErrorMessage]=useState('')
    const [showPassword, setShowPassowrd]=useState(false);
    const handelSingUp = (e)=>{
        console.log('hellow');
        
        e.preventDefault() 
        const email = e.target.email.value;
        const password = e.target.password.value;
        const termas = e.target.trmas.checked
        setErrorMessage('')
        setSuccess(false)
        if(!termas){
            setErrorMessage('please accupt our terms condition')
            return
        }
        if (password.length <= 6) {
            setErrorMessage('worng password');
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result);
            setSuccess(true)
            
        })
        .catch(error => {
            console.log(error);
            setErrorMessage(error.message)
            setSuccess(false)
           
        })
        
    }
    return (
        <div className='flex justify-center'>
            <form onSubmit={handelSingUp} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-2xl text-center">Sign Up Now</h2>
                <div className="card-body">
                    <fieldset className="fieldset relative">
                        <label className="fieldset-label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input name='password' type={showPassword? 'text': 'password'} className="input" placeholder="Password" />
                        <span onClick={()=> setShowPassowrd(!showPassword)} className='btn   absolute mt-[98px] ml-[275px]'>
                            {showPassword ? <FaEyeSlash></FaEyeSlash> :<FaEye></FaEye>
                           }
                        </span>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <fieldset className="fieldsetbg-base-100  w-full">
                            <label className="fieldset-label">
                                <input name='trmas' type="checkbox" className="checkbox " />
                               Accept Our tems And Condition
                            </label>
                        </fieldset>
                        <button type='submit' className="btn btn-neutral mt-4 bg-green-600">Sing Up</button>
                        <p className="text-center text-lg">Already have an account<Link className="text-green-700 underline" to={'/login'}>Login</Link></p>
                    </fieldset>
                </div>
            {
                errormessage && <p className='text-xl text-red-500 text-center pb-3'>{errormessage}</p>
            }
            {
                success && <p className='text-green-600 text-center'>Successfully create user</p>
            }
            
            </form>
            
        </div>
    );
};

export default Signup;