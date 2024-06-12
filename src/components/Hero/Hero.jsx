import React from 'react'
import Greenpin from "../../assets/greenpin.png"
import pin from "../../assets/pin.png"
import { Container, Row, Col, Button , Form , FormGroup, Label , Input, } from 'reactstrap';
import "./hero.css"
const Hero = () => {
  return (
    <div className="jumbotron-container ">
    <Container fluid className="container-full-height container d-flex align-items-center">
      <Row className="w-100 justify-content-end hero-form">
        <Col md="6" className="jumbotron-left">
          {/* Left side content if any */}
        </Col>
        <Col md="6" className="jumbotron-right d-flex align-items-center">
          <Form className="jumbotron-form">
            <h3 className="text-center form-head">Book Your Truck</h3><br />
            <FormGroup>
              <Label for="from">From:</Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <img src={Greenpin} alt="Pin green" className="icon" />
                  </span>
                </div>
                <Input type="text" id="from" name="from" placeholder="Enter your leading city" />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="to">To:</Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <img src={pin} alt="Pin red" className="icon" />
                  </span>
                </div>
                <Input type="text" id="to" name="to" placeholder="Enter your destination city" />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="quantity">Truck Quantity</Label>
              <Input type="select" id="quantity" name="quantity">
                <option value="">Select quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Input>
            </FormGroup>
            <Button type="button" className="form-btn">
              Next
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Hero
