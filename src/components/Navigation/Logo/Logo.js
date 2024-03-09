import React from 'react';
import Tilt from 'react-parallax-tilt';
import logo from './logo.png'

const Logo = () => {
    return (
        <Tilt>
            <div className='logoWrapper'>
                <img alt='logo' src={logo}/>
            </div>
        </Tilt>
    )
}

export default Logo;