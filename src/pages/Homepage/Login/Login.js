import React from 'react'
import './Login.css';

function Login(props) {
    
    
    return (
        <div>
            <h2>LOGIN</h2>
            <p className="error-holder">{props.error.error}</p>
            <form className='login-form'>
                <div className="input-holder">
                    <label><i class="fa fa-user-o" aria-hidden="true"></i>
                        Email</label>
                    <input type="text" value={props.loginData.email}   placeholder="Enter email" className="Email" name="email" onChange={props.onLoginInputChange} required>
                    </input>
                </div>
                <div className="input-holder">
                    <label>Password</label>
                    <input type="password" value={props.loginData.password}  placeholder="Enter password" className="Password" name="password" onChange={props.onLoginInputChange} required />
                </div>
                <div className="input-holder">
                    <button type="submit" onClick = {props.onLoginClick}>Login</button>
                </div>
                <div className="input-holder">
                    <p> Dont have an account? <button onClick={props.onChildClick}>Sign up</button> </p>
                </div>
            </form>
            
        </div>
    )
}

export default Login
