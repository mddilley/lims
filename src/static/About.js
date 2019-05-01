import React from 'react'
import { Container } from 'react-bootstrap'

const About = () =>
  <div>
    <br/><br/>
    <h1 className="display-2 white-background">About Oculus</h1><br/><br/>
    <Container>
    <br/>
    <h5 className="grey-background">Oculus is a laboratory information system intended for small laboratory applications. It is built using a React/Redux frontend and a Ruby on Rails API.</h5>
    </Container>
    <br/>
    <Container>
    <h1 className="display-4 white-background">Testimonials</h1><br/><br/>
    <br/>
    <div className="grey-background batch-space">
      <span>"After running into problems with Jarvis, I realized that I needed to downsize for my laboratory's information needs. Oculus helped me get back on track." -Tony Stark</span>
    </div>
    <div className="grey-background batch-space">
      <span>"With the distraction of having a highly desirable product, Oculus LIMS wrangled my data with minimal onboarding." - Walter White</span>
    </div>
    </Container>
  </div>;

export default About;
