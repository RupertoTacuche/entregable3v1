import React from 'react';

const Header = () => {
    return (
        <div className='bg-black flex justify-center'>
            <img className='md:hidden' src="./header.png" alt="" />
            <img className='hidden md:block' src="./dash.png" alt="" />
        </div>
    );
};

export default Header;