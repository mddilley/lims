import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Welcome = () =>
  <div>
    <br/>
    <Container className="grey-background">
      <Container>
        <h1 className="display-2">Oculus</h1><h4 className="text-align-bottom"> is your small laboratory solution for tracking data.</h4>
      </Container>
      <br/>
      <Container>
        <Row>
          <Col className="col-lg-6 col-12 vertical-center-parent">
            <h5 className="vertical-center">Keep your eye on demograpics and testing data from an application that is just one click away.</h5>
          </Col>
          <Col className="col-lg-6 col-12">
            <img className="small-img img-fluid" src="/images/glassware.jpg" alt="various glassware"/>
          </Col>
        </Row>
        <br/>
        <br/>
        <Row>
          <Col className="col-lg-6 col-12">
            <img className="small-img img-fluid" src="/images/scientist.jpg" alt="scientist working"/>
          </Col>
          <Col className="col-lg-6 col-12 vertical-center-parent">
            <h5 className="vertical-center">Finding yourself overwhelmed by a clunky LIMS? Attain your laboratory zen with Oculus.</h5>
          </Col>
        </Row>
        <br/>
        <br/>
        <Row>
          <Col className="col-lg-6 col-12 vertical-center-parent">
            <h5 className="vertical-center">Customize your experience with the adaptable platform ready for your needs.</h5>
          </Col>
          <Col className="col-lg-6 col-12">
            <img className="small-img img-fluid" src="/images/biology.jpg" alt="test tubes in lab"/>
          </Col>
        </Row>
      </Container>
    </Container>
  </div>;

export default Welcome;
