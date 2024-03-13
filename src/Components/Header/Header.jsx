// import React from 'react';
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex items-center justify-between p-4 mx-auto max-w-7xl border-b-2'>
            <h1 className='md:text-4xl text-2xl text-center font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;