import SignInFormClient from '@/modules/auth/components/sign-in-form-client';
import React from 'react'

const Page = () => {
  return (
    <>
      <img
        src="/login.svg" alt="login-image"
        height={300}
        width={300} className='m-6 object-cover'
      />
      <SignInFormClient/>
    </>
  );
}

export default Page