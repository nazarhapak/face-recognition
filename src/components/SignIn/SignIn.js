import React from 'react';
import './SignIn.css';

const SignIn = ({changeRoute}) => {
    return (
        <div className='fullPage'>
            <div className="enterForm">
                <h2>Sign In</h2>

                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <button type="submit" onClick={() => changeRoute('home')}>Sign In</button>
                <p onClick={() => changeRoute('register')}>Register</p>
            </div>
        </div>
    )
}

export default SignIn;