import Header from "./Header"
import { useState } from "react";




const Login = () => {



const [isLogin, setIsLogin] = useState(true);





const handleRegister = ()=>{

setIsLogin(!isLogin);

}



  return (
    <div
      className="login w-screen h-screen flex justify-center items-center bg-[url(images/bg-image.png)] bg-cover bg-center text-black"

    >

      <Header/>

    <div className="login-container backdrop-blur-md p-10! flex gap-10 flex-col text-white bg-[#000000bf] w-3/12 rounded-lg h-auto">

  <h1 className="text-5xl">{isLogin?"Login":"Register"}</h1>

  <div className="login-section rounded-lg text-white">

    <form className="w-full flex gap-8 flex-col space-y-4">

      {!isLogin &&  <input
        type="text"
        className="w-full block p-4! border bg-[#292929cf] text-white"
        placeholder="Full Name"
      />}

      <input
        type="text"
        className="w-full block p-4! border bg-[#292929cf] text-white"
        placeholder="Email or Mobile Number"
      />


      <input
        type="password"
        className="w-full block p-4! border bg-[#292929cf] text-white"
        placeholder="Password"
      />

      <button className="bg-[#147ff8] cursor-pointer hover:bg-[#045ec5] text-white p-4! rounded-lg">{isLogin?"Login":"Register"}</button>
    </form>

    <div className="signupNow mt-5!">
       
     {isLogin?"New to CineQuery? ":"Aready have an account? "}
       
       <b className="underline cursor-pointer" onClick={handleRegister}>

       {isLogin?"Register":"Login"}

        </b> 
        
        
        </div>

  </div>
</div>

    </div>
  )
}

export default Login
