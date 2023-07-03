import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import logo from '../assets/logo2.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alltoys">All Toys</Link></li>
            {
                  user && <>
                  <li><Link to="/mytoys">My Toys</Link></li>
                    <li><Link to="/addtoys">Add A Toy</Link></li>
                  </>
            }
        <li><Link to="/blogs">Blogs</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" className='lg:h-8 lg:w-8 lg:mr-2 h-6 mr-2'/> <Link to="/">PowerToy</Link></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li><Link to="/">Home</Link></li>
        <li><Link to="/alltoys">All Toys</Link></li>
         {
                  user && <>
                  <li><Link to="/mytoys">My Toys</Link></li>
                    <li><Link to="/addtoys">Add A Toy</Link></li>
                  </>
            }
        <li><Link to="/blogs">Blogs</Link></li>
    </ul>
                </div>
  <div className="navbar-end">
               {
                        user &&
            
                        <div className="w-10 rounded-full">
                        <div className="tooltip" data-tip={user?.displayName}>
                        <div className="avatar">
                        <div className="rounded-full ring ring-accent ring-offset-base-100 ring-offset-2 lg:h-9 h-8">
                            <img src={user?.photoURL} />
                        </div>
                        </div>
                                    </div>
                                     </div>
                    }
           
                   
                    {
                        user ? <button className='btn ml-5' onClick={handleLogOut}>Logout</button> : <div className="btn ml-5"><Link to="login">Login/Register</Link></div>
                    }

  </div>
</div>
        </>
    );
};

export default Header;