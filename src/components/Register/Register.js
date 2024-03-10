import React from 'react';

const Register = ({changeRoute}) => {
    return (
        <div className='fullPage'>
            <div className="enterForm" style={{height: '330px'}}>
                <h2>Register</h2>

                <label htmlFor="name"><b>Name</b></label>
                <input type="text" placeholder="Enter Username" name="name" required/>

                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <button type="submit" style={{marginBottom: '20px',width: '80px', border: 'none'}} onClick={() => changeRoute('home')}>Register</button>
            </div>
        </div>
    )
}

export default Register;