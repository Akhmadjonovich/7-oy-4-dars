import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-blue-600 text-white p-4 flex justify-between'>
      <h1 className='font-bold'>AxroMarket</h1>
      <div className='space-x-4'>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">LogOut</Link>
      </div>
    </nav>
  );
};

export default Navbar;
