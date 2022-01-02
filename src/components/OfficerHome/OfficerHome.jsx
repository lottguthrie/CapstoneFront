import React from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import useForm2 from "../UseForm/UseForm2";
import { Col, Row, Container } from "react-bootstrap";
import axios from "axios";
import submitForm from 'react-bootstrap/Form/package.json'




const OfficerHome = (props) => {

    const {formValues, handleChange, handleSubmit } = useForm(OfficerInfoSubmit);
    const {formValues2, handleChange2, handleSubmit2} = useForm2(OfficerInfo);

    //add username to formValues without using form
    async function OfficerInfoSubmit() {

        const jwt = localStorage.getItem('token');

        let response = await axios.post("http://127.0.0.1:8000/officers/addinfo/", formValues, { headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)
    }

    async function OfficerInfo() {

        const jwt = localStorage.getItem('token');

        let response = await axios.post("http://127.0.0.1:8000/officers/home/", formValues2, { headers: {Authorization: 'Bearer ' + jwt}})
        console.log(response.data)

    }



    return ( 
        
        <div className = "center">
            <h3> Welcome, {props.loggedInUser.first_name} {props.loggedInUser.last_name}</h3> 
            <Container>
            <Row>
                <Col md={2}>
                </Col>
                <Col md={4}>
                    
                    <h4>Officer Details</h4>
                            <Form onSubmit= {handleSubmit}>
                            <Form.Group >
                            <FloatingLabel label="User Name" className="mb-3" controlId="floatingTextarea">
                            <Form.Control type="username" name="username" onChange= {handleChange} required= {true}/>
                            </FloatingLabel>

                            </Form.Group>

                            <Form.Group >
                            <FloatingLabel className="mb-3"  label="Password" controlId="floatingPassword">
                            <Form.Control type="password" name="password" onChange= {handleChange} required= {true}/>
                            </FloatingLabel>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="floatingTextarea">
                            <FloatingLabel label="Last Name">
                            <Form.Control type="text" name="last_name" onChange= {handleChange} required= {true}/>
                            </FloatingLabel>

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="floatingTextarea">
                            <FloatingLabel label="First Name">
                            <Form.Control type="text" name="first_name" onChange= {handleChange} required= {true}/>
                            </FloatingLabel>

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="floatingTextarea">
                            <FloatingLabel label="Middle Name">
                            <Form.Control type="text" name="middle_name" placeholder="Enter Middle Name" onChange= {handleChange} required= {true}/>
                            </FloatingLabel>

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="floatingTextarea">
                            <FloatingLabel label="Phone Number">
                            <Form.Control type="text" name="phone_number" placeholder="Enter Phone Number" onChange= {handleChange} required= {true}/>
                            </FloatingLabel>

                            </Form.Group>

                            <Form.Group >
                            <FloatingLabel label="Email" className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" name="email" onChange= {handleChange} required= {true}/>
                            </FloatingLabel>

                            </Form.Group>

                            <Form.Group >
                            <FloatingLabel label="Badge Number" className="mb-3" controlId="floatingTextarea">
                            <Form.Control type="text" name="badge_number" onChange= {handleChange} required= {true}/>
                            </FloatingLabel>

                            </Form.Group>

                            <Form.Group >
                            <FloatingLabel label="Officer ID" className="mb-3" controlId="floatingTextarea">
                            <Form.Control type="text" name="officer_id" onChange= {handleChange} required= {false}/>
                            </FloatingLabel>

                            </Form.Group>

                            <Form.Group >
                            <FloatingLabel label="Supervisor ID" className="mb-3" controlId="floatingTextarea">
                            <Form.Control type="email" name="supervisor_id" onChange= {handleChange} required= {false}/>
                            </FloatingLabel>

                            </Form.Group>

                            <Form.Group>
                            <FloatingLabel className="mb-3" controlId="floatingSelect" label="Select Current Status" >
                                <Form.Select  type="test" name="is_active" onChange= {(event) => submitForm(event, 1)} required= {true}>
                                <option>Current Employee?</option>
                                <option value="False">No</option>
                                <option value="True">Yes</option>
                                </Form.Select>
                            </FloatingLabel>                  
                            </Form.Group>

                            <Form.Group>
                            <FloatingLabel className="mb-3" controlId="floatingSelect" label="Supervisor Status" >
                                <Form.Select  type="test" name="is_supervisor" onChange= {(event) => submitForm(event, 2)} required= {true}>
                                <option>Select Supervisor Status Here</option>
                                <option value="False">Non Supervisor</option>
                                <option value="True">Supervisor</option>
                                {props.officerDetails.map((officer) =>{
                                   return(
                                       <option value={officer.is_supervisor}> {officer.is_supervisor} </option>
                                    )
                                   })
                               }
                              
                            </Form.Select>
                        </FloatingLabel>                  
                    </Form.Group>

                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>

                    </Form>
                    
                    </Col>
                    <Col md={4}>
                        <h4> Supervisor Info</h4>
                        <Form onSubmit= {handleSubmit2}> 
              <Form.Group >
                <FloatingLabel label="Supervisor ID" className="mb-3" controlId="floatingTextarea">
                <Form.Control type="text" name="supervisor_id" placeholder="Enter Your Supervisor ID if known" onChange= {handleChange2} required= {false}/>
                </FloatingLabel>

              </Form.Group>

              <Form.Group >
                <FloatingLabel className="mb-3"  label="Officer ID" controlId="floatingTextarea">
                <Form.Control type="text" name="officer_id" placeholder="Enter Your Officer ID if Known" onChange= {handleChange2} required= {true}/>
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3" controlId="floatingTextarea">
                <FloatingLabel label="Last Name">
                <Form.Control type="text" name="last_name" placeholder="Enter Last Name" onChange= {handleChange2} required= {true}/>
                </FloatingLabel>

              </Form.Group>

              <Form.Group className="mb-3" controlId="floatingTextarea">
                <FloatingLabel label="First Name">
                <Form.Control type="text" name="first_name" placeholder="Enter First Name" onChange= {handleChange2} required= {true}/>
                </FloatingLabel>

              </Form.Group>

              <Form.Group className="mb-3" controlId="floatingTextarea">
                <FloatingLabel label="Middle Name">
                <Form.Control type="text" name="middle_name" placeholder="Enter Middle Name" onChange= {handleChange2} required= {true}/>
                </FloatingLabel>

              </Form.Group>

              <Form.Group className="mb-3" controlId="floatingTextarea">
                <FloatingLabel label="Badge Number">
                <Form.Control type="text" name="badge_number" placeholder="Enter Your Supervisor Badge Number" onChange= {handleChange2} required= {true}/>
                </FloatingLabel>

              </Form.Group>

              <Form.Group>
                <FloatingLabel controlId="floatingSelect" label="Select Status" >
                  <Form.Select  type="test" name="is_active" onChange= {(event) => submitForm(event, 2)} required= {true}>
                    <option>Are You A Current Supervisor?</option>
                    <option value="False"  >No</option>
                    <option value="True">Yes</option>
                  </Form.Select>
                </FloatingLabel>                  
              </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>

                    
                </Col>
                </Row>
            </Container>
            

        </div>
        
    );
}
 
export default OfficerHome;



