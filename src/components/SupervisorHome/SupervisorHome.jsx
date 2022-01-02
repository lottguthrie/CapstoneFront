import React, { useEffect } from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './SupervisorHome.css'
import { Col, Row, Container } from "react-bootstrap";
import useForm2 from "../UseForm/UseForm2";
import Table from "react-bootstrap/Table";
import admin from "../OfficerDetails/OfficerDetails"


const SupervisorHome = (props) => {

    const {formValues, handleChange, handleSubmit } = useForm(AddSupervisorFormSubmit);
    const {formValues2, handleChange2, handleSubmit2} = useForm2(SupervisorInfoFormSubmit);
    let navigate= useNavigate();

    useEffect(()=>{

    },[props.loadData])
    

    // Adds officers 
    async function AddSupervisorFormSubmit() { 
        const jwt = localStorage.getItem('token');
        console.log(formValues)
        
        let response = await axios.post(`http://127.0.0.1:8000/supervisors/registerofficers/`, { headers: {Authorization: 'Bearer ' + jwt},
            username: formValues.username, last_name: formValues.last_name, first_name: formValues.first_name});
        console.log(response.data)
       
        
    }

        
    async function SupervisorInfoFormSubmit() { 

        const jwt = localStorage.getItem('token'); 

        let response = await axios.post(`http://127.0.0.1:8000/supervisors/officerroleregistration/`, { headers: {Authorization: 'Bearer ' + jwt}, is_supervisor: formValues2.is_supervisor});
        console.log(response.data);
        
        
    }

    async function viewOfficer(officer) {
        await props.officerDetailList(officer)
        await props.admin(admin)
        navigate("..//OfficerDetails")
    } 

   



    return(
    <div className="Form">
        
        <h3 > Welcome, {props.loggedInUser.first_name} {props.loggedInUser.last_name}!</h3>
            <Container className="Container">
                <Row>
                    <Col md={0}>
                    </Col>               
                <Col  md={9}>
                <h5> Officer Data </h5> 
                   <Table bordered hover>
                       <thead>
                       <tr>
                            <td>Username</td>
                            <td>Last Name</td>
                            <td>First Name</td>
                            <td>Officer Details</td>
                           </tr>
                       </thead>
                       <tbody>
                           
                         {props.listOfOfficers.map((officer) => {
                           return (
                             <tr key={officer.username}>
                               <td>{officer.username}</td>
                               <td>{officer.first_name}</td>
                               <td>{officer.last_name}</td>
                               <td><Button onClick={() => viewOfficer(officer.username)}>Employee Data Sheet</Button> </td>                                                             
                             </tr>
                           );
                        })}
                       </tbody>
                   </Table>
                </Col>
                <Col md={2} style={{margin_top: "50px"}}>
                <h6> Add Officers Here </h6> 
                    <Form onSubmit= {handleSubmit2}>
                        <Form.Group >
                            <FloatingLabel label="Officer Roles" className="mb-3" controlId="floatingTextarea">
                                <Form.Control type="text" name="is_supervisor"  onChange= {handleChange2} required= {true}/>
                            </FloatingLabel>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Col>
                </Row>
            </Container>
            

        </div>
        
    );
}
 
export default SupervisorHome;