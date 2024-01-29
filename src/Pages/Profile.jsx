import React from 'react'
import BreadcumbProfile from '../components/BreadcumbProfile';
import ProfileArea from '../components/ProfileArea';
import Footer from '../components/Footer';

function Profile() {
  return (
    <>
    {/* Breadcumb profile */}
    <BreadcumbProfile/>
    {/* Profile area */}
    <ProfileArea/>
    {/* Footer  */}
    <Footer/>
    </>
  )
}

export default Profile;