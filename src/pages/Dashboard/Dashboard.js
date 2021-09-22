import React from 'react'
import "./Dashboard.css";
import { Form,Navbar,Nav,Card, Container,Button } from 'react-bootstrap';
import Profile from './Profile/Profile';

function Dashboard() {
    return (
        <div>
            
            <div className="dashboard-body">
                <div className="profile-info">
                    <Profile />
                </div>
                <div className="articles-info">
                     <div className="articles-stat">Articles stat</div>
                     <div className="articles-map"> Articles map</div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
