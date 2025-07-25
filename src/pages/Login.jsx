import React from 'react'
import { login } from '../app/features/userSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
const Login = () => {
let {user} = useSelector((store) => store.user)
let dispatch = useDispatch()

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();

  if (username && password) {
    dispatch(login(1)); 
  } else {
    alert('Iltimos, barcha maydonlarni to‘ldiring.');
  }
};
if (user !== null) {
  return <Navigate to="/" />;
}

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white p-8 shadow-md space-y-5 rounded w-80'>
        <h3>Login</h3>
        <input type="text" placeholder='username' className='outline-none border-b-1 w-full' value={username}
          onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" placeholder='parol' className='outline-none border-b-1 w-full' value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' className='block text-center bg-blue-500 w-full text-white h-7 rounded-md'>Login</button>
      </form>
    </div>
  )
}

export default Login