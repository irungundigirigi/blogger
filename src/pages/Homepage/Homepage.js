import React,{useState} from 'react';
import './Homepage.css';
import Logo from '../../assets/Logo.png';
import Login from './Login/Login';
import Signup from './Sign up/Signup';
import axios from 'axios';


function Homepage() {
    //states
    const[login, setLogin] = useState({login:true,signup:false})
    const[form, setForm] = useState({});
    
    //function to toggle signup/
    const toggleLogin = (e) => {
        e.preventDefault()
        setLogin({login:false,signup:true})
    }
    //function to handle signup
    const handleSignup =  async (e) => {
        e.preventDefault()
        let formDataRecords = {"name":form.name, "email":form.email, "password":form.password} ;
        await axios.post("http://localhost:3002/user",formDataRecords).then(response => console.log(response.data))
        console.log(formDataRecords)
        
    }

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
                    {login.login && <Login onChildClick={toggleLogin}/>}
                    {login.signup && <Signup onInputChange={handleInputChange}  onSignupClick ={handleSignup} formData={form}/>}
                </div>
            </div>
        </div>
    )
}

export default Homepage
