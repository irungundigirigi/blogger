import React from 'react'
import './home.css';


export default function Home() {
    return (
        <div className="home-wrapper">
            <div className="main-container">
                <h1 className="welcome">Welcome to Blog-it.Here you can write blogs and also keep 
                    up with what others are blogging about.
                </h1>
                <div className="features-links">
                    <div className="features">
                        <i className="icon fas fa-bolt"></i>
                        <p>Fast</p>
                    </div>
                    <div className="features">
                        <i class="icon fas fa-dollar-sign"></i>
                        <p>Free</p>
                    </div>
                     <div className="features">
                        <i class="icon fas fa-check-circle"></i>
                        <p>Easy</p>
                    </div>
                </div>
                
            </div>

            <div className="side-bar">
                <div className="signup-wrapper">
                    <h1 className="signup-header">Sign up</h1>
                    <form className="signup-form">
                        <input name="username" type="text" placeholder="Enter username"></input>
                        <input name="email" type="text" placeholder="Enter Email"></input>
                        <input name="password" type="passsword" placeholder="Enter password"></input>

                        <button>Continue</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
