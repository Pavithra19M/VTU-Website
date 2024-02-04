import React, {useState, useEffect} from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';

const AdmissionDetailsScreen = () => {
    const [admissionData, setAdmissionData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3003/admissionFormInfo')
        .then((res) => {
            console.log("res", res.data)
            setAdmissionData(res.data)
        })
        .catch((err) => console.log("err", err))
    },[admissionData])

const navigate = useNavigate()

    const logoutHandler = () => {
        navigate('/admin/login')
    }

  return (
    <Container className='my-3 justify-content-center'>
        
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <h3 className='text-center'>New Admission Details</h3>
            <Button type='submit' onClick={logoutHandler} variant='secondary'>Logout</Button>
        </div>

        <Table bordered striped hover responsive className='my-5 th-style' size="sm">
            <thead>
                <tr>
                    <th>SlNo</th>
                    <th> First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>DOB</th>
                    <th>Address</th>
                    <th>School Name</th>
                    <th>SSLC Board Name</th>
                    <th>Passed Out Year</th>
                    <th>Percent %</th>
                    <th>PUC/Dipolma University Name</th>
                    <th>PUC/Dipolma Board Name</th>
                    <th>Passed Out Year</th>
                    <th>Percent %</th>
                    <th>College Id</th>
                    <th>College Name</th>
                    <th>Stream</th>
                    <th>Seats Availability</th>
                    <th>Admission status</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                    {
                        admissionData !== undefined &&
                        admissionData.map((d, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{d.firstName}</td>
                                <td>{d.middleName}</td>
                                <td>{d.lastName}</td>
                                <td>{d.dob}</td>
                                <td>{d.address} {d.city} {d.state} {d.pincode}</td>
                                <td>{d.schoolName}</td>
                                <td>{d.sslcBoard}</td>
                                <td>{d.poy}</td>
                                <td>{d.percentage}</td>
                                <td>{d.puc}</td>
                                <td>{d.pucBoard}</td>
                                <td>{d.collegePoy}</td>
                                <td>{d.collegePercentage}</td>
                                <td>{d.collegeId}</td>
                                <td>{d.collegeName}</td>
                                <td>{d.stream}</td>
                                <td>Not Updated</td>
                                <td>Not Updated</td>
                                <td><FaEdit /></td>
                                <td><FaTrash /></td>
                            </tr>
                        ))
                    }
            </tbody>

        </Table>
    </Container>
  )
}

export default AdmissionDetailsScreen