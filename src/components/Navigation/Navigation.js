import React from 'react';
import './Navigation.css';

const Navigation = ({changeRoute, isSignedIn}) => {
    if (isSignedIn) {
        return (
            <nav>
                <p onClick={() => changeRoute('signIn')}>Sign Out</p>
            </nav>
        )
    } else {
        return (
            <nav>
                <p onClick={() => changeRoute('signIn')} style={{marginRight: '10px'}}>Sign In</p>
                <p onClick={() => changeRoute('register')}>Register</p>
            </nav> 
        )
    }
}

export default Navigation;