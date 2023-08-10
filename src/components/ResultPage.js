import React, {useState, useEffect} from "react";
import {Container, Row, Col, Form} from 'react-bootstrap';
import TableData from "./TableData";
import {useParams} from 'react-router-dom';
import axios from 'axios';

const ResultPage = () => {

    const[studentDetails, setStudentDetails] = useState([])
    const value = useParams()

   useEffect(()=>{
        axios.get('http://localhost:3000/studentInfo')
        .then((response) => {
            response.data.map((item) => {
                if(item.registerId == value.id){
                    setStudentDetails(item)
                }
            })
        })
        .catch((err) => {
            console.log(err)
        })
   },[])
   
    return(
        <Container>
            <Row className='justify-content-center py-5'>
                <Col md={6}>
                    <h5>Visvesvaraya Technological University, Belagaum</h5>
                    <h6 class='h6-style'>VII Semester, B.E Examination Result, Nov/Dec.2023</h6>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                <Form>
                        {
                            studentDetails !=undefined &&
                            <Form.Group controlId="studentName">
                            <Form.Label className="form-style">Student Name:</Form.Label>
                            <Form.Label style={{fontSize:"large",marginLeft:"8rem"}}>{studentDetails.studentName}</Form.Label> <br/>

                            <Form.Label className="form-style">Mother's/Father's Name:</Form.Label>
                            <Form.Label style={{fontSize:"large",marginLeft:"2rem"}}>{studentDetails.fatherName}</Form.Label><br/>

                            <Form.Label className="form-style">College Name:</Form.Label>
                            <Form.Label style={{fontSize:"large",marginLeft:"8rem"}}>{studentDetails.CollegeName}</Form.Label>
                        </Form.Group>
                        }
                </Form>
                </Col>

                <Col md={6}>
                <Form style={{float:"right"}}>
                       {
                            studentDetails != undefined && 
                            <Form.Group controlId="RegisterNumber">
                            <Form.Label className="form-style">Register Number:</Form.Label>
                            <Form.Label style={{fontSize:"large"}}>{studentDetails.registerId}</Form.Label>
                            </Form.Group>
                       }
                </Form>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <TableData studentId={studentDetails.registerId}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ResultPage