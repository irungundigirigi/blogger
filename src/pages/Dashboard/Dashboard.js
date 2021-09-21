import React from 'react'
import "./Dashboard.css";
import { Navbar,Nav,Card, Container,Button } from 'react-bootstrap';

function Dashboard() {
    return (
        <div>
            //Navbar content
            <div className="dashboard-body">
                <div className="profile-info">
                    <div className="profile">
                        <div className="profile-holder"></div>
                        <div><Button className="edit-profile">E</Button></div>
                        <div className="profile-name">
                            <h3>Allan Kioko</h3>
                            
                        </div>
                    </div>
                    <div className="write"> 
                        <Button>Write</Button>
                    </div>
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
