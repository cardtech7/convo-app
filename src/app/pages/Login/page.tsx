'use client';

import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';




const Login = () => {
  // Usestate For password visibility
  const [showPassword, setShowPassword] = useState(false);
  // Router to access pages
  const router = useRouter();
  // Handle Login form submit
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form refresh

    router.push('/Chats');// Onsubmit route to mainpage
  };

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-5 bg-white font-sans "> 
    {/* Login Form */}
      <form action="" onSubmit={handleLogin} className = "flex flex-col items-center justify-center gap-5 h-96 w-80 shadow-zero-offset shadow-Text_Primary border-Text_Primary rounded-3xl  ">
        
        {/* Username Input */}
        <h1 className=" flex justify-center text-Text_Primary text-2xl font-bold ">
          Login
        </h1>
        <label htmlFor='username' className = "relative right-16 top-5 text-Text_Primary font-bold text-xl ">Username</label >
        <input 
          type="text" 
          name="username" 
          id="" 
          placeholder = " Enter Username " 
          className = " w-60 h-9 bg-white border border-Text_Primary rounded-lg text-Text_Secondary pl-2 "
        />

        {/* Input Password */}
        <label htmlFor='password' className='relative right-16 top-5 text-Text_Primary font-bold text-xl'>Password</label>
        <input 
        type={showPassword ? 'text' : 'password'} 
        name="password" 
        id="" 
        placeholder = " Enter Password " 
        className = " p-2 w-60 h-9 bg-white border text-Text_Secondary border-Text_Primary rounded-lg pl-2 "
        />

        {/* Button Password Visibiity */}
        <button
          type="button"
          className="absolute transform right-16 mt-28 focus:outline-none  text-black "
          onClick={() => setShowPassword((prev) => !prev)}
        >
        {/* Handle onclick show password */}
        {showPassword ? (
          <EyeOffIcon className="text-xl" />
        ) : (
          <EyeIcon className="text-xl" />
        )}
        </button>

        {/* Login Button */}
        <button type="submit" onClick={handleLogin} className = "relative top-3 bg-background_main w-36 h-9 rounded-full text-Text_Primary text-xl font-bold  ">
        Login
        </button>
        {/* Link for Signup&Registration */}
        <a href="Register" className = "relative top-4 text-xs flex justify-center ">Don't have an account yet?
          <span className = " text-background_main underline ">Sign Up Now</span>
        </a>    

      </form>

      {/* Footer */}
      <div className = " flex items-center justify-center mb-4 relative top-32">
        <h1 className=' items-end   text-Text_Primary text-base font-bold '>
          Developed by:<span className=' text-background_main'>cardTech.inc</span>
        </h1>
      </div>
    </main>
  )
}

export default Login