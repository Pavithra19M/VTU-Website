import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SlideComponenet = () => {

    return(
       <Container>
        <br/>
            <marquee>
                <h3>
                VTU Results 2023 Out- Check Exam Results !!!
                <Link to='/result'>Click here...</Link> Best Of Luck!!!
                </h3>
            </marquee> 
            <br/>

            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-img"
                    src="images/img1.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
 
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-img"
                    src="images/img2.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-img"
                    src="images/img3.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-img"
                    src="images/img4.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-img"
                    src="images/img5.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <br/>

            <Row>
                <Col md={4}>
                    <Link to='/vision'><h3>Vision</h3></Link>
                    <p>
                    To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.
                    </p>

                    <p>
                    To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.
                    </p>

                    <Link to='/vission' className="btn btn-warning" style={{margin:"3rem 0"}}>Read More</Link>
                </Col>

                <Col md={4}>
                    <Link to='/mission'><h3>Mission</h3></Link>
                    <p>
                    To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.
                    </p>
                    <p>
                    To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.
                    </p>
                    <Link to='/mission' className="btn btn-warning">Read More</Link>
                </Col>

                <Col md={4}>
                    <Link to='/mandate'><h3>Mandate</h3></Link>
                    <p>
                    The Visvesvaraya Technological University has been established by the Government of the Karnataka in order to Promote planned and sustainable development of technical education consistent with state and national policies.
                    *Design need based programs that ensure adequate human resource of the right kind.
                    *Establish objective evaluation and certification systems for students,programs and institutions.
                    *Collaborate with national and international institutions R&D establishments organizations like AICTE, MHRD, UGC, etc.industry and user agencies.
                    </p>
                    <Link to='/mandate' className="btn btn-warning" style={{margin:"2rem 0"}}>Read More</Link>
                </Col>
            </Row>
       </Container> 
    )
}

export default SlideComponenet