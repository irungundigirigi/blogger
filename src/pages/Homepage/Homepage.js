import React,{useState} from 'react';
import './Homepage.css';
import Logo from '../../assets/Logo.png';
import Login from './Login/Login';
import Signup from './Sign up/Signup';


function Homepage() {
    const[login, setLogin] = useState({login:true,signup:false})
    const toggleLogin = (e) => {
        e.preventDefault()
        setLogin({login:false,signup:true})
    }
    return (
        <div className="Main-container">
            <div className="Homepage">
                <div className="Home-welcome">
                    <h1>Welcome to blogger.</h1>
                    <div className="logo-holder">
                        <img src={Logo} className="logo" />
                    </div>
                </div>
                <div className="Sign_Login">
                    {login.login && <Login onChildClick={toggleLogin}/>}
                    {login.signup && <Signup />}
                </div>
            </div>
        </div>
    )
}

export default Homepage
