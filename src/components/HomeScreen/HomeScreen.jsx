import React from 'react';
import './HomeScreen.css'
import { Row, Container } from "react-bootstrap";


function HomeScreen(){

    return(
        <div>            
            <Container className="homeScreenStyling">
                <Row>
                    <h1>Welcome to L.E.E.P.S.</h1>
                    <p>A Law Enforcement Evaluation and Productivity System.</p>
                    <p>Leading the Industry with Innovation</p>
                </Row>
            </Container>
        </div>
        
    )
}

export default HomeScreen;