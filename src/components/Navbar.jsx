import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
let {user} = useSelector((store) => store.user)
  return (
    <nav className='bg-blue-600 text-white p-4 flex justify-between'>
      

      <h2>Welcome, {user.displayName}</h2>
      <div className='space-x-4 flex items-center'>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      <img src={user.photoURL} className='w-7' alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
