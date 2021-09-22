import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { Modal,Form,Navbar,Nav,Card, Container,Button } from 'react-bootstrap';
import './Profile.css';



function Profile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [userData, setUserData] = useState("");

    const updateData = async() => {
        const result = await axios.get('http://localhost:3002/user').then(res => {
            let user = res.data
            setUserData('')
            setUserData(user)
        })
        
    }
    useEffect(async () => {
        const result = await axios.get('http://localhost:3002/user').then(res => {
            let user = res.data
            setUserData(user)
            
        })
    },[])

    const handleSubmit = async(e) => {
        const data = new FormData()
        await data.append('profile', selectedFile,)
        axios.post("http://localhost:3002/upload-profile", data,//receive two parameter endpoint url
        {headers:{'accept':'application/json','Content-Type':`multipart/form-data`}}).then(res => {
            console.log(res.data)
        })
        updateData()
        


    }
    const handleChange = (e) => {
        setSelectedFile(e.target.files[0])
        console.log(selectedFile)

    }

    return (
        <div>
            <div className="profile">
                <div className="profile-holder">
                    <img className="profile-holder" src={userData.profile} />
                </div>
                <div className="profile-name">
                    <h3>{userData.name}</h3>
                </div>
                <Button variant="primary" onClick={handleShow}>
                     edit
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div>
                        <input type='file' name='profile' onChange= {handleChange} />
                        <Button onClick={handleSubmit}>update</Button>
                    </div>
                        
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
            
        </div>
    )
}

export default Profile
