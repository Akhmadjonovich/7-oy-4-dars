import { login } from '../app/features/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Link, Navigate } from 'react-router-dom'
import { useSignup } from '../hooks/useSignup'

const SignUp = () => {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const [displayName, setDisplayname] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [email, setEmail] = useState('');

  const { isPending, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target)
    let displayName = formData.get("displayName")
    let email = formData.get("email")
    let password = formData.get("password")

    if (!displayName || !email || !password || !repassword) {
      toast.info('Iltimos, barcha maydonlarni toldiring.');
      return;
    }

    if (password !== repassword) {
      toast.error("Parollar mos emas");
      return;
    }
    
    
    signup( displayName, email, password );

    
    
  }

  if (user !== null) {
    return <Navigate to="/" />;
  }

  return (
    <div className='flex justify-start items-center h-screen bg-cover bg-right' style={{ backgroundImage: `url(/login-bg.jpg)` }}>
      <form onSubmit={handleSubmit} className='bg-gray-200 p-20 ml-20 shadow-2xl space-y-5 rounded-xl w-[40%] max-lg:p-15 max-md:p-10 max-sm:w-[80%] max-sm:mx-auto'>
        <h3 className='text-xl font-semibold'>Sign Up</h3>

        <input type="text" name="displayName" placeholder='Display Name' className='outline-none border-b-1 w-full' value={displayName}
          onChange={(e) => setDisplayname(e.target.value)} required />

        <input type="email" name="email" placeholder='Email' className='outline-none border-b-1 w-full' value={email}
          onChange={(e) => setEmail(e.target.value)} required />

        <input type="password" name="password" placeholder='Password' className='outline-none border-b-1 w-full' value={password}
          onChange={(e) => setPassword(e.target.value)} required />

        <input type="password" placeholder='Confirm Password' className='outline-none border-b-1 w-full' value={repassword}
          onChange={(e) => setRepassword(e.target.value)} required />

        <div className=' flex justify-between'>
          {
            isPending
              ? <button type="button" disabled className="bg-gray-400 text-white px-4 py-2 rounded">Loading...</button>
              : <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded w-full'>Sign Up</button>
          }
        </div>

        <p>If you already have an account, you can <Link className='text-green-600 font-bold' to="/login">Log In</Link>.</p>
      </form>
      <ToastContainer theme='dark' position='top-center' />
    </div>
  );
}

export default SignUp;
