import React from "react";
import { Col, Row, Container, Stack} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Table from "react-bootstrap/Table";
import './OfficerDetails.css'



const OfficerDetails = (props) => {
    let officerDetails = Array.from(props.officerDetailList)
    

    let navigate = useNavigate()

    const handleClick=(event)=> {
        props.removeOfficer(event)
        props.setLoadData(!props.loadData)
        navigate("../Supervisor/Home")
        

    }
   

    return(
        <div>
            <Container >
                <Col className="Officer"><h3>{officerDetails[0].username}</h3>
                 
            </Col> 
            <Col  className="button">
                <Row>
            <Table bordered hover>
                <thead>
                    <tr>
                    <td>Last Name</td>
                    <td>First Name</td>
                    <td>Middle Name</td>
                    <td>Phone Number</td>
                    <td>Email</td>
                    <td>Badge Number</td>
                    <td>Officer ID</td>
                    <td>Supervisor ID</td>
                    <td>Active Employee</td>
                    <td>Active Supervisor</td>
                    </tr>

                </thead>
                <tbody>
                {officerDetails.map((officer) => {
                    return (
                        
                      <tr key={officer.username}>
                        <td>{officer.last_name}</td>
                        <td>{officer.first_name}</td>
                        <td>{officer.middle_name}</td>
                        <td>{officer.phone_number}</td>
                        <td>{officer.email}</td>
                        <td>{officer.badge_number}</td>
                        <td>{officer.officer_id}</td>
                        <td>{officer.supervisor_id}</td>
                        <td>{officer.is_active}</td>
                        <td>{officer.is_supervisor}</td>
                                                      
                      </tr>                             
                      
                    );
                         })}
                </tbody>
            </Table>
            </Row>
            <Row>
                <Table bordered hover>
                    <thead>
                        <tr >
                            <td>Training</td>
                            <td>Evaluations</td>
                            <td>Service Time</td>
                            <td>Awards</td>
                            <td>Officer ID</td>
                        </tr>

                    </thead>
                    <tbody>
                        {props.admin.map((admin) => {
                            return(
                                <tr key={admin.username}>
                                    <td>{admin.training}</td>
                                    <td>{admin.evaluations}</td>
                                    <td>{admin.service_time}</td>
                                    <td>{admin.awards}</td>
                                    <td>{admin.officer_id}</td>
                                </tr>

                            )

                        })}
                    </tbody>
                </Table>
            </Row>
            </Col>
            <Col className="col-md-3 mx-auto">
            
                <Stack gap= {2} className="buttonGroup">
                    <Button onClick={() => handleClick(officerDetails[0].username)}>Delete Employee</Button>
                
                    <Button onClick={()=>{navigate("../Officer/Home")} }>Return Home</Button>
                </Stack>
            

            </Col>
            
            </Container>
        </div>
        
    )

}

export default OfficerDetails;