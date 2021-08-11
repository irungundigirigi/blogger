import React from 'react'

function Signup() {
    return (
        <div>
        <h2>SIGN UP</h2>
        <form className='login-form'>
            <div className="input-holder">
                    <label>Email</label>
                    <input type="text" placeholder="Enter email" className="Email" required />
            </div>
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
        </form>
        
    </div>
    )
}

export default Signup
