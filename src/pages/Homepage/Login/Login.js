import React from 'react'
import './Login.css';

function Login(props) {
    
    
    return (
        <div>
            <h2>LOGIN</h2>
            <form className='login-form'>
                <div className="input-holder">
                    <label><i class="fa fa-user-o" aria-hidden="true"></i>
                        Username</label>
                    <input type="text" placeholder="Enter username" className="Username" required>
                    </input>
                </div>
                <div className="input-holder">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" className="Password" required />
                </div>
                <div className="input-holder">
                    <button type="submit">Login</button>
                </div>
                <div className="input-holder">
                    <p> Dont have an account? <button onClick={props.onChildClick}>Sign up</button> </p>
                </div>
            </form>
            
        </div>
    )
}

export default Login
