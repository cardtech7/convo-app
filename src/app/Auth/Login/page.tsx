'use client';

import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';




const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form refresh

    // Directly redirect to '/main' without any validation or conditions
    router.push('/Main');
  };
  return (
    <main className=" bg-white font-sans ">
        <div className=" flex justify-center items-center w-screen h-screen">
          <div className=''>
            <form action="" onSubmit={handleLogin} className = " flex justify-center  h-96 w-80 shadow-zero-offset shadow-Text_Primary border-Text_Primary rounded-3xl  ">
                <div>
                  <h1 className=" pt-5 flex justify-center text-Text_Primary text-2xl font-bold ">
                    Login
                  </h1>
                  
                  <div className = " mt-8 flex justify-center items-center h-72 ">
                    <div>
                      <div >
                          <h1 className = " text-Text_Primary font-bold text-xl ">Username</h1>
                          <input 
                          type="text" 
                          name="username" 
                          id="" 
                          placeholder = " Enter Username " 
                          className = " p-2 w-60 h-9 bg-white border border-Text_Primary rounded-lg text-Text_Secondary "
                          />
                      </div>

                      <div className=' relative top-5'>
                          <h1 className=' text-Text_Primary font-bold text-xl'>Password</h1>
                          <input 
                          type={showPassword ? 'text' : 'password'} 
                          name="password" 
                          id="" 
                          placeholder = " Enter Password " 
                          className = " p-2 w-60 h-9 bg-white border text-Text_Secondary border-Text_Primary rounded-lg "
                          />
                          <button
                            type="button"
                            className="absolute transform right-5 mt-1.5 focus:outline-none  text-black "
                            onClick={() => setShowPassword((prev) => !prev)}
                          >
                            {showPassword ? (
                              <EyeOffIcon className="text-xl" />
                            ) : (
                              <EyeIcon className="text-xl" />
                            )}
                          </button>
                      </div>

                      <div className = " relative flex justify-center items-end h-20 top-4 ">
                        <button type="submit" onClick={handleLogin} className = " bg-background_main w-36 h-9 rounded-full text-Text_Primary text-xl font-bold  ">
                          Login
                        </button>
                      </div>
                      <div className = " flex justify-center items-end h-14 text-Text_Primary text-sm font-medium  ">
                        <a href="Signup" className = " text-xs flex justify-center ">Don't have an account yet?<span className = " text-background_main underline ">Sign Up Now</span></a>
                      </div>
                    </div>  
                  </div>       
                </div>
            </form>
            <div className = " relative flex justify-center top-40  ">
              <h1 className=' items-end   text-Text_Primary text-base font-bold '>
                Developed by:<span className=' text-background_main'>cardTech.inc</span>
              </h1>
            </div>
          </div>  
        </div>
    </main>
  )
}

export default Login