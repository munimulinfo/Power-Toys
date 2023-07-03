import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet';

const Register = () => {
    const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'
    
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
          setError("password not valid, Try With 6 character ");
          return;
        }
        if ((name, email, password, photo)) {
          createUser(email, password)
            
            .then((result) => {
              const loggedUser = result.user;
              updateUserData(result.user, name, photo)
              event.target.reset();
              navigate(from, { replace: true })
            })
            .catch((err) => {
              setError(err.message);
            });
          
          
        }
  }
  
  const updateUserData = (user, name, photo)=>{
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
      console.log('User Updated Complete');
      })
      .catch(() => {
      setError(error.message)
    })
    }
    return (
      <div>
         <Helmet>
                <title>Power Toys - Register</title>
            </Helmet>
            <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in with</label>
         <form onSubmit={handleRegister} className='mt-5'>
            <input className="text-sm w-full px-4 py-2 mb-4 border border-solid border-gray-300 rounded" type="name" placeholder='Your Name' name="name" required />
            <input className="text-sm w-full px-4 py-2 mb-4 border border-solid border-gray-300 rounded"  type="text" placeholder='Photo URL' name="photo" required/>
            <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" name="email" type="text" placeholder="Email Address" required/>
            <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" name="password" type="password" placeholder="Password" required/>
                <h2 className='text-sm text-red-600'>{error}</h2>
        <div className="text-center md:text-left">
          <button className="mt-4 btn-accent hover:btn-info px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Register</button>
        </div>
            </form>

        </div>
        
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
         Already Have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/login">Login</Link>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Register;