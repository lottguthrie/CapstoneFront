import React, {useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import useForm from '../UseForm/UseForm';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Container } from "react-bootstrap";
import "./UserRegistration.css"

const UserRegistration = (props) => {

    const {formValues, handleChange, handleSubmit } = useForm(Register);
    const [formPage, setFormPage] = useState(2);
    


    const submitForm =(event, formPage)=> {
      setFormPage(formPage)
      handleChange(event)      
      console.log(formPage)
    }
        
    let navigate= useNavigate();

  

    async function Register() { 
      console.log(formPage)
      if(formPage === 2){
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', formValues);
        
        navigate("../Login")
      }
      else{
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/employee/', formValues);
        
        navigate("../Login")

      }
        
        
    } 
    // Officer Registration Form
    function renderOfficerRegistration(){
      return (
          <div>
            <Container className = "center">
              <Row>
            <Col md={2}>
                </Col>
              <Col md={8}>
                
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
      //Supervisor Registration Form
    function RenderSupervisorRegistration(){
      return (
        <div>
          <Container  className = "center">
          <Row>
            <Col md={2}>
              </Col>
              <Col md={8}>
            <Form onSubmit= {handleSubmit}> 
                <Form.Group >
                  <FloatingLabel label="Supervisor ID" className="mb-3" controlId="floatingTextarea">
                  <Form.Control type="text" name="supervisor_id" placeholder="Enter Your Supervisor ID if known" onChange= {handleChange} required= {false}/>
                  </FloatingLabel>

                </Form.Group>

                <Form.Group >
                  <FloatingLabel className="mb-3"  label="Officer ID" controlId="floatingTextarea">
                  <Form.Control type="text" name="officer_id" placeholder="Enter Your Officer ID if Known" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingTextarea">
                  <FloatingLabel label="Last Name">
                  <Form.Control type="text" name="last_name" placeholder="Enter Last Name" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>

                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingTextarea">
                  <FloatingLabel label="First Name">
                  <Form.Control type="text" name="first_name" placeholder="Enter First Name" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>

                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingTextarea">
                  <FloatingLabel label="Middle Name">
                  <Form.Control type="text" name="middle_name" placeholder="Enter Middle Name" onChange= {handleChange} required= {true}/>
                  </FloatingLabel>

                </Form.Group>

                <Form.Group className="mb-3" controlId="floatingTextarea">
                  <FloatingLabel label="Badge Number">
                  <Form.Control type="text" name="badge_number" placeholder="Enter Your Supervisor Badge Number" onChange= {handleChange} required= {true}/>
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

                <Button className="center" variant="primary" type="submit" >
                  Submit
                </Button>
              </Form>
              </Col>
              </Row> 
            </Container>
        </div>
      );
    }

    

    return(
      <React.Fragment>
        <div>
          
            {formPage === 2 ? renderOfficerRegistration() : RenderSupervisorRegistration()}
          
        </div>
      </React.Fragment>
      
    )


}

export default UserRegistration;