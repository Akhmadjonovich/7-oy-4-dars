import { login } from '../app/features/userSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
let {user} = useSelector((store) => store.user)
let dispatch = useDispatch()
let {isPending, login} = useLogin()

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');



const handleSubmit = (e) => {
  e.preventDefault();
  
  if (username && password) {
    dispatch(login(1)); 
  } else {
    toast.info('Iltimos, barcha maydonlarni toldiring.');
  }
  console.log({username , password});

  };
  



if (user !== null) {
  return <Navigate to="/" />;
}

  return (
    <div className='flex justify-start items-center h-screen bg-cover bg-right' style={{backgroundImage: `url(/login-bg.jpg)`}}  >
      <form onSubmit={handleSubmit} className='bg-gray-200 p-20 ml-20 shadow-2xl space-y-5 rounded-xl w-[40%] max-lg:p-15 max-md:p-10 max-sm:w-[80%] max-sm:mx-auto' >
        <h3 className='text-xl font-semibold'>Login</h3>
        
        <input type="text" placeholder='UserName' className='outline-none border-b-1 w-full' value={username}
          onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder='Password' className='outline-none border-b-1 w-full' value={password}
          onChange={(e) => setPassword(e.target.value)} required/>
        
        <button type='submit' className='block text-center bg-blue-500 w-full text-white h-10 rounded-md'>Login</button>
        <p>If you are new to the site, you can <Link className='text-green-600 font-bold' to="/signup">SignUp</Link>.</p>
      </form>
      <ToastContainer theme='dark' position='top-center' />
    </div>
  )
}

export default Login