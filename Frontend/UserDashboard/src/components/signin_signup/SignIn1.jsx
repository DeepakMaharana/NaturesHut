import React, { useState } from 'react'
import SignInHeader from './SignInHeader'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

import { BG_IMAGE_URL } from '../../utils/constants'

const SignIn = ({loginwindow}) => {

  const [signin_signup, setSignInSignUp] = useState(loginwindow);
  console.log(BG_IMAGE_URL);
  return (
    <div>
      <SignInHeader/>
      <div className={`w-screen h-screen bg-cover bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_small.jpg')]`}>
        <div className="w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.6)]">
          <div className="w-max sm:w-[450px] h-max p-16 bg-black bg-opacity-70">
            {signin_signup === 1?<SignInForm setSignUp={()=>{setSignInSignUp(2)}}/>:<SignUpForm setSignIn={()=>{setSignInSignUp(1)}}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn