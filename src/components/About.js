import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap';

const About = () => {

  return (
    <Container>
        <Row className='my-3 p-style' >
            <Col md={6}>
                <Image src="images/vision.jpg" fluid  />
            </Col>

            <Col md={6}>
            <h3 style={{color:"orange"}}>Vision</h3>
                    <p>
                    To become an outstanding Technological University at the cutting edge of 
                    Science and Technology that produces world class Knowledge-delivery,
                     Research, Extension and Leadership in Technology innovation for Industry 
                     and Society.
                    </p>

                    <p>
                    To become an outstanding Technological University at the cutting edge of
                     Science and Technology that produces world class Knowledge-delivery, 
                     Research, Extension and Leadership in Technology innovation for Industry
                         and Society.
                    </p>
            </Col>
        </Row>

        <Row className='my-3 p-style' >
            <Col md={6}>
            <h3 style={{color:"orange"}}>Mission</h3>
            <p>
                    To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.
                    </p>
                    <p>
                    To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.
                    </p>
            </Col>

            <Col md={6}>
                <Image src="images/mission.jpg" fluid  />
            </Col>
        </Row>

        <Row className='my-3 p-style' >

        <Col md={6}>
                <Image src="images/mandate.jpg" fluid  />
            </Col>

            <Col md={6}>
            <h3 style={{color:"orange"}}>Mandate</h3>
            <p>
                    The Visvesvaraya Technological University has been established by the Government of the Karnataka in order to Promote planned and sustainable development of technical education consistent with state and national policies.
                   <br/>
                    *Design need based programs that ensure adequate human resource of the right kind.
                    <br/>
                    *Establish objective evaluation and certification systems for students,programs and institutions.
                    <br/>
                    *Collaborate with national and international institutions R&D establishments organizations like AICTE, MHRD, UGC, etc.industry and user agencies.
                    </p>
            </Col>

           
        </Row>
    </Container>
    
  )
}

export default About