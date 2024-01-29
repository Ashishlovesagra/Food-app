import React from 'react';
import BreadcumbLogin from '../components/BreadcumbLogin';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

function Login() {
  return (
    <>
    {/* B readCumb Login*/}
     <BreadcumbLogin/>
     {/* Contact (loginForm) form area */}
     <LoginForm/>
     {/* Footer area */}
     <Footer/>
    </>
  )
}

export default Login;