import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase_init_";




const Register = () => {

    const handleRegister = (e)=> {
        e.preventDefault()
       const email = e.target.email.value;
       console.log(email);
       const password = e.target.password.value;
       console.log(password);
    //  create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
        console.log(result);
        
    })
       .catch(eerror => {
        console.log(eerror);
        
       })
        
        

    }
    return (
        <div className="flex items-center justify-center">
            <div  className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister}  className="card-body">
                    <h2 className="text-2xl text-center">Register Now</h2>
                    <fieldset  className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
            </div>
        </div>

    );
};

export default Register;