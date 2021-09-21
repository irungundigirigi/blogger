import React, {useState} from 'react';
import './Homepage.css';
import Logo from '../../assets/Logo.png';
import Login from './Login/Login';
import Signup from './Sign up/Signup';
import axios from 'axios';
import { useHistory } from "react-router-dom";


function Homepage() {
    //states
    const[login, setLogin] = useState({login:true,signup:false})
    const[form, setForm] = useState({});
    const[cookie,setCookie] = useState({});
    const[loginForm, setLoginForm] = useState({});
    const[loginError,setLoginError] = useState({});
    const history = useHistory();


    
    //function to toggle signup/
    const toggleLogin = (e) => {
        e.preventDefault()
        setLogin({login:false,signup:true})
    }
    //function to handle signup
    const handleSignup =  async (e) => {
        e.preventDefault()
        let formDataRecords = {"name":form.name, "email":form.email, "password":form.password} ;
        await axios.post("http://localhost:3002/signup",formDataRecords).then(response => console.log(response.data))
    }

    //Handle loginInputChange
    const handleLoginInputChange = async (e) => {
        const value = e.target.value;
        await setLoginForm({...loginForm,
        [e.target.name]:value
        });
       
    }
   

    //Handle login
    const handleLogin = async (e) => {
        e.preventDefault()
        let loginDetails = {"email":loginForm.email, "password":loginForm.password} ;
        await axios.post("http://localhost:3002/login",loginDetails)
        .then(response => {
            console.log(response.data)
            if(response.data.code === "S") {
                history.push("/feed");
            }else if (response.data.code === "WP") {
                setLoginError({...loginError, error:"Wrong password"})
                console.log(loginError)
            }else if (response.data.code === "UNF") {
               setLoginError({...loginError, error:"User not found"})
                console.log(loginError)
            }
        })
        
    
    }
    
    //Handle Signup Input Change
    const handleInputChange = async (e) => {
        const value = e.target.value;
        await setForm({...form,
        [e.target.name]:value
        });
       
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
                    {login.login && <Login  onLoginInputChange={handleLoginInputChange} onChildClick={toggleLogin} onLoginClick = {handleLogin} error = {loginError} loginData={loginForm}/>}
                    {login.signup && <Signup onInputChange={handleInputChange}  onSignupClick ={handleSignup} formData={form}/>}
                </div>
            </div>
        </div>
    )
}

export default Homepage
