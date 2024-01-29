import React from 'react'
import BreadcumSignup from '../components/BreadcumSignup';
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer';

function Signup() {
  return (
    <>
    {/* Breadcumb signup */}
    <BreadcumSignup/>
    {/* Singup form */}
    <SignupForm/>
    {/* footer area */}
    <Footer/>
    </>
  )
}

export default Signup;