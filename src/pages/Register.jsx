import React from 'react';
import Add from '../images/Avatar.png';

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>REGISTER</span>
                <span className='logo'>PAGE</span>
                <form>
                    <input type='text' placeholder='Display name'/>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                    <input style={{display: 'none'}} id='file' type='file'/>
                    <label htmlFor='file'>
                        <img src={Add} alt='avatar right here'/>
                        <span>Add an Avatar</span>
                    </label>
                    <button type='submit'>Sign Up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    );
};

export default Register;