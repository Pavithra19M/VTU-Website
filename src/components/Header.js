import React from 'react';
import {Container, Nav,Navbar, NavDropdown, Image} from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap';

const Header = () => {

    return(
        <header>
            <Navbar className='navbar-style' expand='lg'>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand href='/'>
                        <Image src='images/logo.jpg' roundedCircle  className='logo-style'/>
                        <h6 className='logo_name'>Visvesvaraya Technological University, Belagaum</h6>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto nav-style">
                            <LinkContainer to='/'>
                                <Nav.Link href="/">Home</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/about'>
                                <Nav.Link href="/about">About VTU</Nav.Link>
                            </LinkContainer>
                            
                            <NavDropdown title="Academic" id="basic-nav-dropdown">
                              <LinkContainer to='/student/admissionform'>
                                <NavDropdown.Item href="/student/admissionform">New Applicant
                                </NavDropdown.Item>
                              </LinkContainer>
                              
                              <LinkContainer to='/circular & notification'>
                                <NavDropdown.Item href="/circular & notification">Circular & Notification</NavDropdown.Item>
                              </LinkContainer>

                              <LinkContainer to='/certificates'>
                                <NavDropdown.Item href="/certificates">Certificates Issued</NavDropdown.Item>
                              </LinkContainer>
                            </NavDropdown>

                            <NavDropdown title="Examination" id="basic-nav-dropdown">
                              <LinkContainer to='/exam_guidlines'>
                                <NavDropdown.Item href="/exam_guidlines">Examination Guidlines</NavDropdown.Item>
                              </LinkContainer>
                              
                              <LinkContainer to='/exam_application'>
                                <NavDropdown.Item href="/exam_application">Examination Application</NavDropdown.Item>
                              </LinkContainer>

                              <LinkContainer to='/result'>
                                <NavDropdown.Item href="/result">Results</NavDropdown.Item>
                              </LinkContainer>
                            </NavDropdown>

                            <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
                              <LinkContainer to='/civil'>
                                <NavDropdown.Item href="/civil">Civil Engineering</NavDropdown.Item>
                              </LinkContainer>
                              
                              <LinkContainer to='/computerscience'>
                                <NavDropdown.Item href="/computerscience">Computer Science Engineering</NavDropdown.Item>
                              </LinkContainer>

                              <LinkContainer to='/electronics'>
                                <NavDropdown.Item href="/electronics">Electronics & Communication Engineering</NavDropdown.Item>
                              </LinkContainer>
                            </NavDropdown>

                            <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                              <LinkContainer to='/admin/login'>
                                <NavDropdown.Item href='/admin/login'>Login as Admin</NavDropdown.Item>
                              </LinkContainer>
                            </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header