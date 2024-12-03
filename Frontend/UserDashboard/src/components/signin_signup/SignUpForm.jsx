import React, { useRef, useState } from "react";
import { signUpValidation } from "../../utils/validation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../../utils/firebase"
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { addUser, removeUser } from '../../utils/redux/userSlice';
import { USER_AVTAR } from "../../utils/constants";

const SignUpForm = ({setSignIn}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState(null);
  const firstname =  useRef(null);
  const lastname =  useRef(null);
  const email =  useRef(null);
  const password =  useRef(null);

  const submitSignUpForm = ()=>{
    const errMsg = signUpValidation(firstname.current.value, lastname.current.value, email.current.value, password.current.value);
    console.log(errMsg);

    if(errMsg)
    {
      setErrorMsg(errMsg);
      return false;
    }
    else
    {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        updateProfile(auth.currentUser, {
          displayName: firstname.current.value+" "+lastname.current.value, photoURL: USER_AVTAR

        }).then(() => {
          // Profile updated!
          // ...
          const {uid, email, displayName, photoUrl} = auth.currentUser;
          dispatch(addUser({
            uid, email, displayName, photoUrl
          }))

          navigate("/browse")

        }).catch((error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          setErrorMsg(errorMessage);
        });

      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;

        if( errorCode === "auth/email-already-in-use")
        {
          errorMessage = "Alredy register user, please sign in."
        }

        setErrorMsg(errorMessage);
      });
    }

  }

  return (
    <>
      <form action="#" onSubmit={(e)=>e.preventDefault()}>
        <h1 className="text-white font-bold text-4xl mb-6 text-center">Sign Up</h1>
        {
          errorMsg?<p className="p-2 text-red-600 text-sm text-center m-2">{errorMsg}</p>:null
        }
        <input
          type="text"
          ref={firstname}
          name=""
          id=""
          className="w-full bg-transparent border-2 border-slate-400 border-opacity-50 rounded-md p-4 mb-5 text-white"
          placeholder="First Name"
        />

        <input
          type="text"
          ref={lastname}
          name=""
          id=""
          className="w-full bg-transparent border-2 border-slate-400 border-opacity-50 rounded-md p-4 mb-5 text-white"
          placeholder="Last Name"
        />

        <input
          type="text"
          ref={email}
          name=""
          id=""
          className="w-full bg-transparent border-2 border-slate-400 border-opacity-50 rounded-md p-4 mb-5 text-white"
          placeholder="Email or mobile number"
        />

        <input ref={password} type="password" className="w-full bg-transparent border-2 border-slate-400 border-opacity-50 rounded-md p-4 mb-5 text-white" placeholder="Password" name="" id="" />

        <button className="w-full bg-red-600 border-2 border-red-800 rounded-md p-2 mb-5 text-white cursor-pointer" onClick={submitSignUpForm}>Sign Up</button>

        <p className="text-slate-500 text-sm">Alredy register user? <span onClick={setSignIn} className="cursor-pointer hover:underline text-white">Sign in now</span> </p>
      </form>
    </>
  );
};

export default SignUpForm;
