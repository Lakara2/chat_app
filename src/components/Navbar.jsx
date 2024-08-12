import profile from '../images/profile_nav.jpg';
import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'> LOGO </span>
      <div className='user'>
        <img src={profile} alt="profile image"/>
        <span>Name</span>
        <button> logout </button>
      </div>
    </div>
  );
};

export default Navbar;