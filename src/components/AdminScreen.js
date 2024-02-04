import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';

const AdminScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const[emailError, setEmailError] = useState('')
    // const[passwordError, setPasswordError] = useState('')


    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
        if(email === ''){
            toast.error("Please enter email Id")
        }
        if(!passwordPattern.test(password)){
            toast.error("Password required alteast 8-20 characters, 1 number, 1 upper case letter, 1 symbol")
        } else{
            axios.get('http://localhost:3002/adminInfo')
            .then((res) => {
                console.log("res", res.data)
                res.data.map((data) => {
                    if( email === data.email && password === data.password){
                        navigate('/admin/admissiondetails')
                    }else{
                        toast.error("Invalid username or password")
                    }
                })
            })
            .catch((err) => console.log("err", err))
        }   
        setEmail('')
        setPassword('')
    }
 
    const changeEventEmail = (e) => {
        setEmail(e.target.value)
      //  setEmailError('')
    }

    const changeEventPassword = (e) => {
        setPassword(e.target.value)
       // setPasswordError('')
    }

  return (
    <Container className='my-3'>
        <Row className='justify-content-center'>
            <Col md={4}>
            <h3> Sign In</h3>
        <Form onSubmit = {submitHandler}>
            <Form.Group className='my-3' controlId='email'>
                <Form.Label> Email</Form.Label>
                <Form.Control type='email' placeholder='enter email'
                    value={email} onChange= {changeEventEmail}   />
            {/* { emailError ? <div style={{color:'red'}}>{emailError}</div>:''} */}
            </Form.Group>

            <Form.Group className='my-3' controlId='password'>
                <Form.Label> Password</Form.Label>
                <Form.Control type='password' placeholder='enter password'
                    value={password} onChange= {changeEventPassword}/>
                     {/* { passwordError ? <div style={{color:'red'}}>{passwordError}</div>:''} */}
            </Form.Group>

            <Button type='submit'>Login</Button>
        </Form>
            </Col>
        </Row>
    </Container>

  )
}

export default AdminScreen