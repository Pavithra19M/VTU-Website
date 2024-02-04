import React, { useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast} from 'react-toastify';

const AdmissionFormScreen = () => {
    const selectedCity = [
        { value:'', text:"select city"},
        { value:'Assam', text:'Assam'},
        { value:'Benguluru', text:'Benguluru'},
        { value:'Chennai', text:'Chennai'},
        { value:'Cochin', text:'Cochin'},
        { value:'Hyderabad', text:'Hyderabad'},
    ]

    const selectedState = [
        { value:'', text:"select state"},
        { value:'Madhya Pradesh', text:'Madhya Pradesh'},
        { value:'Karnataka', text:'Karnataka'},
        { value:'Tamil Nadu', text:'Tamil Nadu'},
        { value:'Kerela', text:'Kerela'},
        { value:'Telegana', text:'Telegana'},
    ]

    const selectedCollegeId=[
        {value:'', text:'Select CollegeId' },
        {value:'SAIT1001' , text:'SAIT1001'},
        {value:'OU2004' , text:'OU2004'},
        {value:'MSVIT1003' , text:'MSVIT1003'},
        {value:'DSIT2002' , text:'DSIT2002'},
        {value:'AIT1005' , text:'AIT1005'},
    ]

    const selectedCollegeName=[
        {value:'', text:'Select CollegeName' },
        {value:'Sambhram Institute of Technology' , text:'Sambhram Institute of Technology'},
        {value:'Oxford Unveristy' , text:'Oxford Unveristy'},
        {value:'MSVIT' , text:'MSVIT'},
        {value:'Dayand Sagar Institute of Technology' , text:'Dayand Sagar Institute of Technology'},
        {value:'Acharya Institute of Technology' , text:'Acharya Institute of Technology'},
    ]

    const selectedStream=[
        {value:'', text:'Select Stream' },
        {value:'Computer & Science Engg' , text:'Computer & Science Engg'},
        {value:'Mechanical Engg' , text:'Mechanical Engg'},
        {value:'Electronics Communication & Engg' , text:'Electronics Communication & Engg'},
        {value:'Electrical & Electronic Engg' , text:'Electrical & Electronic Engg'},
        {value:'Civil Engg' , text:'Civil Engg'},
    ]

    const[firstName, setFirstName] = useState('')
    const[middleName, setMiddleName] = useState('')
    const[lastName, setLastName] = useState('')
    const[dob,setDob] = useState('')
    const[address,setAddress] = useState('')
    const [city,setCity] = useState(selectedCity[0].value)
    const [state,setState] = useState(selectedState[0].value)
    const[pincode,setPincode] = useState()
    const[schoolName,setSchoolName] = useState('')
    const[sslcBoard,setSslcBoard] = useState('')
    const[poy,setPoy] = useState('')
    const[percentage,setPercentage] = useState()
    const[puc,setPuc] = useState('')
    const[pucBoard,setPucBoard] = useState('')
    const[collegePoy,setCollegePoy]= useState('')
    const[collegePercentage,setCollegePercentage]= useState()
    const[collegeId,setCollegeId] = useState('')
    const[collegeName,setCollegeName] = useState('')
    const[stream,setStream] = useState('')
    const[inputValue,setInputValue] = useState(false)
    const[inputValue2,setInputValue2] = useState(false)

    const savedData = {
        firstName:firstName,
        middleName:middleName,
        lastName:lastName,
        dob:dob,
        address:address,
        city:city,
        state:state,
        pincode:pincode,
        schoolName:schoolName,
        sslcBoard:sslcBoard,
        poy:poy,
        percentage:percentage,
        puc:puc,
        pucBoard:pucBoard,
        collegePoy:collegePoy,
        collegePercentage:collegePercentage,
        collegeId:collegeId,
        collegeName:collegeName,
        stream:stream
    }

    const saveHandler = (e) => {
        e.preventDefault()
     
        if(firstName === '' || lastName === '' || dob === '' || address === '' || city === ''
        || state === '' || pincode === '' || schoolName === '' || sslcBoard === '' ||
        poy === '' || percentage === '' || puc === '' || pucBoard === '' || collegePoy === '' 
        || collegePercentage === '' || collegeId === '' || collegeName === '' || stream === ''){
            toast.error("Please fill highlighted fileds")
            setInputValue(true)
            setInputValue2(true)
        }else{
            axios.post('http://localhost:3003/admissionFormInfo', savedData).
            then((res) => {
                console.log("res", res.data)
                toast.success("Submitted Successfully!!!")
            }).catch((err) => console.log("err",err))
        }

        setFirstName('')
        setMiddleName('')
        setLastName('')
        setDob('')
        setAddress('')
        setCity('')
        setState('')
        setPincode('')
        setSchoolName('')
        setSslcBoard('')
        setPoy('')
        setPercentage('')
        setPuc('')
        setPucBoard('')
        setCollegePoy('')
        setCollegePercentage('')
        setCollegeId('')
        setCollegeName('')
        setStream('')
    }

    const changeEventHandler1 = (e) => {
        setInputValue(false)
        setFirstName(e.target.value)
    }
    const changeEventHandler2 = (e) => {
        setInputValue(false)
        setMiddleName(e.target.value)
    }

    const changeEventHandler3 = (e) => {
        setInputValue2(false)
        setLastName(e.target.value)
    }

    const changeEventHandler4 = (e) => {
        setInputValue(false)
        setDob(e.target.value)
    }

    const changeEventHandler5 = (e) => {
        setInputValue(false)
        setAddress(e.target.value)
    }

    const changeEventHandler6 = (e) => {
        setInputValue(false)
        setCity(e.target.value)
    }

    const changeEventHandler7 = (e) => {
        setInputValue(false)
        setState(e.target.value)
    }

    const changeEventHandler8 = (e) => {
        setInputValue(false)
        setPincode(e.target.value)
    }

    const changeEventHandler9 = (e) => {
        setInputValue(false)
        setSchoolName(e.target.value)
    }

    const changeEventHandler10 = (e) => {
        setInputValue(false)
        setSslcBoard(e.target.value)
    }

    const changeEventHandler11 = (e) => {
        setInputValue(false)
        setPoy(e.target.value)
    }

    const changeEventHandler12 = (e) => {
        setInputValue(false)
        setPercentage(e.target.value)
    }

    const changeEventHandler13 = (e) => {
        setInputValue(false)
        setPuc(e.target.value)
    }

    const changeEventHandler14 = (e) => {
        setInputValue(false)
        setPucBoard(e.target.value)
    }

    const changeEventHandler15 = (e) => {
        setInputValue(false)
        setCollegePoy(e.target.value)
    }

    const changeEventHandler16 = (e) => {
        setInputValue(false)
        setCollegePercentage(e.target.value)
    }

    const changeEventHandler17 = (e) => {
        setInputValue(false)
        setCollegeId(e.target.value)
    }

    const changeEventHandler18 = (e) => {
        setInputValue(false)
        setCollegeName(e.target.value)
    }

    const changeEventHandler19 = (e) => {
        setInputValue(false)
        setStream(e.target.value)
    }
    
 

  return (

    <Container className='my-3'>
        <h3 className='text-center mb-5'>Fill Below Details for New Admission</h3>

        <div>
            <h5>Personal Details</h5><hr/>
                <Row>
                    <Col md={3}>
                        <Form>
                            <Form.Group controlId='firstName' className='my-2'>
                                <Form.Label>First Name
                                    <span style={{color:'red'}}>*</span></Form.Label>
                                   
                                <Form.Control type='text' placeholder='Enter firstName'
                                 style={{borderColor: inputValue === true ? 'red' : ''}} 
                                value={firstName} onChange={changeEventHandler1}
                               
                                />
                            </Form.Group>
                        </Form> 
                    </Col>

                    <Col md={3}>
                    <Form>
                            <Form.Group controlId='middleName' className='my-2'>
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control type='text' placeholder='Enter middleName'
                                style={{borderColor: inputValue === true ? 'red' : ''}}
                                value={middleName} onChange={changeEventHandler2} />
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col md={3}>
                    <Form>
                            <Form.Group controlId='lastName' className='my-2'>
                                <Form.Label>Last Name
                                <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control type='text' placeholder='Enter lastName'
                                style={{borderColor: inputValue2 === true ? 'red' : ''}} 
                                value={lastName} onChange={changeEventHandler3}/>
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col md={3}>
                    <Form>
                            <Form.Group controlId='dob' className='my-2'>
                                <Form.Label>Date of Birth
                                <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control type='date' value={dob}
                                style={{borderColor: inputValue === true ? 'red' : ''}}
                                onChange={changeEventHandler4}/>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col md={3}>
                        <Form>
                            <Form.Group controlId='Address' className='my-2'>
                                <Form.Label>Address
                                <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control type='text' placeholder='street, area'
                                value={address} onChange={changeEventHandler5}
                                style={{borderColor: inputValue === true ? 'red' : ''}} />
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col md={3}>
                        <Form>
                            <Form.Group controlId='city' className='my-2'>
                                <Form.Label>City
                                <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control as = 'select' value={city}
                                onChange={changeEventHandler6}
                                style={{borderColor: inputValue === true ? 'red' : ''}} >
                                { selectedCity.map((city) => (
                                    <option key={city.text} value={city.value}>{city.text}</option>
                                   ))}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col md={3}>
                        <Form>
                            <Form.Group controlId='state' className='my-2'>
                                <Form.Label>State
                                <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control as = 'select' value={state} 
                                onChange={changeEventHandler7}
                                style={{borderColor: inputValue === true ? 'red' : ''}} >
                                   { selectedState.map((state) => (
                                    <option key={state.text} value={state.value}>{state.text}</option>
                                   ))}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col md={3}>
                        <Form>
                            <Form.Group controlId='pincode' className='my-2'>
                                <Form.Label>Pin Code
                                <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control type='text' placeholder='pincode'
                                value={pincode} onChange={changeEventHandler8}
                                style={{borderColor: inputValue === true ? 'red' : ''}} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
        </div> 

        <div className='my-3'>
            <h5>Eduction Details</h5><hr/>
            
            <Row>
                <Col md={3}>
                        <Form>
                            <Form.Group controlId='schoolName' className='my-2'>
                                <Form.Label>School Name
                                <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control type='text' placeholder='schoolName'
                                value={schoolName} onChange={changeEventHandler9}
                                style={{borderColor: inputValue === true ? 'red' : ''}} />
                            </Form.Group>
                        </Form>
                </Col>

                <Col md={3}>
                        <Form>
                            <Form.Group controlId='boardName' className='my-2'>
                                <Form.Label>SSLC Education Board Name
                                <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control type='text' placeholder='boardName'
                                value={sslcBoard} onChange={changeEventHandler10}
                                style={{borderColor: inputValue === true ? 'red' : ''}} />
                            </Form.Group>
                        </Form>
                </Col>

                <Col md={3}>
                        <Form>
                            <Form.Group controlId='passedOutYear' className='my-2'>
                                <Form.Label>Passed Out Year
                                <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control type='date' 
                                value={poy} onChange={changeEventHandler11}
                                style={{borderColor: inputValue === true ? 'red' : ''}} />
                            </Form.Group>
                        </Form>
                </Col>

                <Col md={3}>
                        <Form>
                            <Form.Group controlId='percentage' className='my-2'>
                                <Form.Label>Percentage
                                <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control type='number' placeholder='percentage'
                                value={percentage} onChange={changeEventHandler12}
                                style={{borderColor: inputValue === true ? 'red' : ''}} />
                            </Form.Group>
                        </Form>
                </Col>
            </Row>

            <Row>
                <Col md={3}>
                        <Form>
                            <Form.Group controlId='collegeName' className='my-2'>
                                <Form.Label>PUC/Dipolma University Name
                                <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control type='text' placeholder='collegeName'
                                value={puc} onChange={changeEventHandler13}
                                style={{borderColor: inputValue === true ? 'red' : ''}} />
                            </Form.Group>
                        </Form>
                </Col>

                <Col md={3}>
                        <Form>
                            <Form.Group controlId='boardName' className='my-2'>
                                <Form.Label>PUC/Dipolma Board Name
                                <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control type='text' placeholder='boardName'
                                value={pucBoard} onChange={changeEventHandler14}
                                style={{borderColor: inputValue === true ? 'red' : ''}} />
                            </Form.Group>
                        </Form>
                </Col>

                <Col md={3}>
                        <Form>
                            <Form.Group controlId='passedOutYear' className='my-2'>
                                <Form.Label>Passed Out Year
                                <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control type='date' 
                                value={collegePoy} onChange={changeEventHandler15}
                                style={{borderColor: inputValue === true ? 'red' : ''}} />
                            </Form.Group>
                        </Form>
                </Col>

                <Col md={3}>
                        <Form>
                            <Form.Group controlId='percentage' className='my-2'>
                                <Form.Label>Percentage
                                <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control type='number' placeholder='percentage'
                                value={collegePercentage} onChange={changeEventHandler16}
                                style={{borderColor: inputValue === true ? 'red' : ''}} />
                            </Form.Group>
                        </Form>
                </Col>
            </Row>
        </div> 

        <div className='my-3'>
            <h5>Select Your College and Stream</h5><hr/>

            <Row>

            <Col md={3}>
                    <Form.Group controlId='enggcollege' className='my-2'>
                        <Form.Label>Select College ID
                        <span style={{color:'red'}}>*</span>
                        </Form.Label>
                        <Form.Control as = 'select' value={collegeId} 
                        onChange={changeEventHandler17}
                        style={{borderColor: inputValue === true ? 'red' : ''}} >
                            { selectedCollegeId.map((id) => (
                                <option key={id.value} value={id.text}>{id.text}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>

            <Col md={3}>
                    <Form.Group controlId='enggcollege' className='my-2'>
                        <Form.Label>Select College
                        <span style={{color:'red'}}>*</span>
                        </Form.Label>
                        <Form.Control as = 'select' value={collegeName} 
                        onChange={changeEventHandler18}
                        style={{borderColor: inputValue === true ? 'red' : ''}} >
                            { selectedCollegeName.map((name) => (
                                <option key={name.value} value={name.text}>{name.text}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>

                <Col md={3}>
                        <Form>
                            <Form.Group controlId='stream' className='my-2'>
                                <Form.Label>Select Stream
                                <span style={{color:'red'}}>*</span>
                                </Form.Label>
                                <Form.Control as='select' value={stream}
                                onChange={changeEventHandler19}
                                style={{borderColor: inputValue === true ? 'red' : ''}} >
                                    { selectedStream.map((stream) => (
                                        <option key={stream.value} value={stream.text}>{stream.text}</option>
                                    )) }
                                    
                                </Form.Control>
                                
                            </Form.Group>
                        </Form>
                </Col>

                <Col md={3}>
                    <Form>
                    <Form.Group controlId='seats' className='my-2'>
                        <Form.Label>Seats Availability</Form.Label>
                        <Form.Control text='number' value = {0}  />   
                    </Form.Group>
                    </Form>
                </Col> 
            </Row>
        </div>

        <div>
            <Button type='submit' className='btn btn-secondary px-4 mx-3'
            onClick = {saveHandler}>Submit</Button>
            <Button type='reset' className='btn btn-secondary px-4'>Clear</Button>
        </div>

    </Container>
  )
}

export default AdmissionFormScreen