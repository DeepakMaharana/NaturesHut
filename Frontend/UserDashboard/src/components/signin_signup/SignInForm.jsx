import React, { useRef, useState } from "react";
import { signInValidation } from "../../utils/validation";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../utils/firebase"
import { useNavigate } from "react-router-dom";

const SignInForm = ({setSignUp}) => {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const submitSignInForm = ()=>{
    
    const errMsg =  signInValidation(email.current.value, password.current.value);
    console.log(errMsg);
    if(errMsg)
      {
        setErrorMsg(errMsg);
        return false;
      }
      else
      {
        signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode +" : "+ errorMessage);
        });
      }

  }

  return (
    <>
      <form action="#" onSubmit={(e)=>e.preventDefault()}>
        <h1 className="text-white font-bold text-4xl mb-6 text-center">Sign In</h1>
        {
          errorMsg?<p className="p-2 text-red-600 text-sm m-2 text-center">{errorMsg}</p>:null
        }
        <input
        ref={email}
          type="text"
          name=""
          id=""
          className="w-full bg-transparent border-2 border-slate-400 border-opacity-50 rounded-md p-4 mb-5 text-white"
          placeholder="Email or mobile number"
        />

        <input type="password" ref={password} className="w-full bg-transparent border-2 border-slate-400 border-opacity-50 rounded-md p-4 mb-5 text-white" placeholder="Password" name="" id="" />

        <button className="w-full bg-red-600 border-2 border-red-800 rounded-md p-2 mb-5 text-white cursor-pointer" onClick={submitSignInForm}>Sign In</button>

        <p className="text-slate-500 text-sm">New to Netflix? <span className="cursor-pointer hover:underline text-white" onClick={setSignUp}>Sign up now</span> </p>
      </form>
    </>
  );
};

export default SignInForm;
