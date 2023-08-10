import React, {useState} from "react";
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const ResultComponenet = () => {

    const [registerInput, setRegisterInput] = useState('')
    const [error, setError] = useState('')

    
    const navigate = useNavigate()

    const resultPageHandler = (e,id) => {
        e.preventDefault()
        if(registerInput == ''){
            setError("Please Enter your Register Number")
        } else{
            axios.get('http://localhost:3000/studentInfo')
            .then((response) => {
                console.log(response.data)
                response.data.map((data) => {
                    if(data.registerId == id){
                        navigate(`/resultpage/${id}`)
                    } else{
                        setError("Invalid Register Number")
                    }
                })
            })
        }
    }
    
    return(
        <>
          
           <Link to='/home' className="btn btn-dark my-4">Go Back</Link>
           <Container>
            <br/><br/>
                <Row className="justify-content-center form-style">
                    <Col md={6} >
                        <h3 style={{textAlign:"center"}}>Check your Results here....</h3>
                        <br/>
                    <Form onSubmit={(e) => resultPageHandler(e,registerInput)} >
                            <Form.Group controlId="formRegisterNumber">
                                    <Form.Label>Enter your Register No:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter register no" 
                                     value={registerInput} onChange = {(e) => setRegisterInput(e.target.value)}
                                    />
                            </Form.Group>
                                <br/>
                            <Button type="submit">Submit</Button>
                    </Form>

                    {
                        error ? <div className="text-danger">{error}</div> : null
                        
                    }
                
                    </Col>
                </Row>       
           </Container>
        </>
    )
}

export default ResultComponenet