import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { ToastContainer } from 'react-toastify';
const Navbar = () => {
  let {isPending, logout} =  useLogout()
  let {user} = useSelector((store) => store.user)
  return (
    <><nav className='bg-blue-600 text-white p-4 flex justify-between'>
      

      <h2 className='text-3xl max-md:text-xl max-sm:text-sm'>Welcome, {user.displayName}</h2>
      <div className='space-x-4 flex text-xl max-sm:text-sm items-center'>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      <img src={user.photoURL} className='w-7' alt="" />
      <button onClick={logout} className=''>LogOut</button>
      </div>
    </nav>
      <ToastContainer/>
    </>
  );
};

export default Navbar;
