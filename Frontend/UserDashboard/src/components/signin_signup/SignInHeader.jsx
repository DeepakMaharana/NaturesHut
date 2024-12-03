import React from 'react'
import { LOGO_URL } from '../../utils/constants'

const SignInHeader = () => {
  return (
    <div className='absolute w-full bg-gradient-to-b from-black px-10 py-2'>
        <img className='w-48' src={LOGO_URL} alt="Logo" />
    </div>
  )
}

export default SignInHeader