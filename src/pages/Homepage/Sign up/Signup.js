import React from 'react'
import './Signup.css';

function Signup(props) {
    return (
        <div>
        <h2>SIGN UP</h2>
        <form className='login-form'>
        <div className="input-holder">
                <label><i class="fa fa-user-o" aria-hidden="true"></i>
                    Name</label>
                <input  value={props.formData.name} onChange={props.onInputChange} type="text" placeholder="Enter name" className="Username" name="name"  required>
                </input>
            </div>
            <div className="input-holder">
                    <label>Email</label>
                    <input value={props.formData.email} onChange={props.onInputChange} type="text" placeholder="Enter email" className="Email" name="email" required />
            </div>
           
            <div className="input-holder">
                <label>Password</label>
                <input value={props.formData.password}  onChange={props.onInputChange} type="password" placeholder="Enter password" className="Password" name="password" required />
            </div>
            <div className="input-holder">
                <button onClick= {props.onSignupClick} type="submit">Signup</button>
            </div>
        </form>
        
    </div>
    )
}

export default Signup
