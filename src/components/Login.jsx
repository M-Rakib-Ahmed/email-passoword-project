

const Login = () => {
    return (
     
   <div className="flex items-center justify-center">
    
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-2xl text-center">Login Now</h2>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 bg-accent">Login</button>
                    </fieldset>
                </div>
            </div>
   </div>
  
    );
};

export default Login;