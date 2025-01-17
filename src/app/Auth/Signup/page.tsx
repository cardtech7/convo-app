"use client";

import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showReenterPassword, setShowReenterPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleReenterPasswordVisibility = () => setShowReenterPassword(!showReenterPassword);
    return(
      <main className=" bg-white font-sans ">
        <div className=" flex justify-center items-center w-screen h-screen">
          <div className=' '>
            <div className='w-80 h-full p-5 shadow-zero-offset shadow-Text_Primary border-Text_Primary rounded-3xl'>
              <form action="" className = "  flex justify-center   ">
                  <div>
                    <h1 className="  flex justify-center text-Text_Primary text-2xl font-bold ">
                      Sign Up
                    </h1>
                    
                    <div className = " flex justify-center items-center ">
                      <div>
                        <div className=' relative top-6 '>
                            <h1 className = " text-Text_Primary font-bold text-xl ">
                              Username
                            </h1>
                            <input 
                            type="text" 
                            name="username" 
                            id="" 
                            placeholder = " Enter Username " 
                            className = " p-2 w-64 h-9 bg-white border border-Text_Primary rounded-lg text-Text_Secondary "
                            />
                        </div>

                        <div className=' relative top-8 '>
                            <h1 className = " text-Text_Primary font-bold text-xl ">
                              Username
                            </h1>
                            <input 
                            type="text" 
                            name="username" 
                            id="" 
                            placeholder = " Enter Username " 
                            className = " p-2 w-64 h-9 bg-white border border-Text_Primary rounded-lg text-Text_Secondary "
                            />
                        </div>

                        <div className=' relative top-10'>
                            <h1 className=' text-Text_Primary font-bold text-xl'>Password</h1>
                            <input 
                            type={showPassword ? 'text' : 'password'} 
                            name="password" 
                            id="" 
                            placeholder = " Enter Password " 
                            className = " p-2 w-64 h-9 bg-white border text-Text_Secondary border-Text_Primary rounded-lg "
                            />
                            <button
                              type="button"
                              className="relative right-8 top-1.5 focus:outline-none  text-black "
                              onClick={togglePasswordVisibility}
                            >
                              {showPassword ? (
                                <EyeOffIcon className="text-xl" />
                              ) : (
                                <EyeIcon className="text-xl" />
                              )}
                            </button>
                        </div>

                        <div className=' relative top-12'>
                            <h1 className=' text-Text_Primary font-bold text-xl'> Re-enter Password</h1>
                            <input 
                            type={showReenterPassword ? 'text' : 'password'} 
                            name="Reenterpassword" 
                            id="" 
                            placeholder = " Enter Re-enter Password " 
                            className = " p-2 w-64 h-9 bg-white border text-Text_Secondary border-Text_Primary rounded-lg "
                            />
                            <button
                              type="button"
                              className="relative right-8 top-10 -translate-y-8 text-black  focus:outline-none"
                              onClick={toggleReenterPasswordVisibility}
                            >
                              {showReenterPassword ? (
                                <EyeOffIcon className="text-xl" />
                              ) : (
                                <EyeIcon className="text-xl" />
                              )}
                            </button>
                        </div>

                        <div className = " relative flex justify-center items-end h-20 top-7 ">
                          <button type="submit" className = " bg-background_main w-40 h-9 rounded-full text-Text_Primary text-xl font-bold  ">
                            Sign Up
                          </button>
                        </div>
                        <div className = " flex justify-center items-end h-14 text-Text_Primary text-sm font-medium  ">
                          <a href="Login" className = " text-xs flex justify-center ">Already have an account?<span className = " text-background_main underline ">Login Now</span></a>
                        </div>
                      </div>  
                    </div>       
                  </div>
              </form>
            </div>
            <div className = " relative flex justify-center top-32  ">
              <h1 className=' items-end   text-Text_Primary text-base font-bold '>
                Developed by:<span className=' text-background_main'>cardTech.inc</span>
              </h1>
            </div>
          </div> 

        </div>
      </main>
    )
};

export default SignUp;