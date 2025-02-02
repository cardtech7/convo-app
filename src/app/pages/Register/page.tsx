"use client";

import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';

const SignUp = () => {
  // State variables for the inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Handle input changes
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Log the values to the console
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <main className="flex flex-col text-Text_Primary justify-center items-center h-screen w-screen bg-white font-sans ">
      {/* Sign up form */}
      <form onSubmit={handleSubmit} className="p-5 flex flex-col justify-center items-center gap-2 shadow-zero-offset shadow-Text_Primary border-Text_Primary rounded-3xl">
        <h1 className="flex justify-center text-Text_Primary text-2xl font-bold">Sign Up</h1>
        
        {/* Username Input */}
        <h1 className="relative right-16 top-2 text-Text_Primary font-bold text-xl">Username</h1>
        <input
          type="text"
          name="username"
          value={username} // Bind the input to state
          onChange={handleUsernameChange} // Handle changes
          placeholder="Enter Username"
          className="p-2 w-64 h-9 bg-white border border-Text_Primary rounded-lg text-Text_Secondary"
        />
        
        {/* Email Input */}
        <h1 className="relative right-24 top-2 ml-4 text-Text_Primary font-bold text-xl">Email</h1>
        <input
          type="text"
          name="email"
          value={email} // Bind the input to state
          onChange={handleEmailChange} // Handle changes
          placeholder="Enter Email"
          className="p-2 w-64 h-9 bg-white border border-Text_Primary rounded-lg text-Text_Secondary"
        />
        
        {/* Password Input */}
        <h1 className="relative right-16 top-2 text-Text_Primary font-bold text-xl">Password</h1>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={password} // Bind the input to state
          onChange={handlePasswordChange} // Handle changes
          placeholder="Enter Password"
          className="p-2 w-64 h-9 bg-white border text-Text_Secondary border-Text_Primary rounded-lg"
        />
        
        {/* Visibility Button */}
        <button
          type="button"
          className="relative bottom-9 left-24 -mt-0.5 focus:outline-none text-black"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <EyeOffIcon className="text-xl" /> : <EyeIcon className="text-xl" />}
        </button>
        
        {/* Registration Button */}
        <button type="submit" className="relative bottom-3 bg-background_main w-40 h-9 rounded-full text-Text_Primary text-xl font-bold">
          Sign Up
        </button>
        
        {/* Login Page link */}
        <a href="login" className="text-xs flex justify-center">
          Already have an account?
          <span className="text-background_main underline">Login Now</span>
        </a>
      </form>

      {/* Footer */}
      <div className="relative flex justify-center top-32">
        <h1 className="items-end text-Text_Primary text-base font-bold">
          Developed by: <span className="text-background_main">cardTech.inc</span>
        </h1>
      </div>
    </main>
  );
};

export default SignUp;
