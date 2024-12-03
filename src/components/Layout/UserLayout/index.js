import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const UserLayout = (props) => {
  return (
    <>
        <Header/>

        {props.children}

        <Footer/>

    </>
  )
}

export default UserLayout