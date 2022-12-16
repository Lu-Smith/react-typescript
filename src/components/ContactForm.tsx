import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactForm: React.FC = () => {
  return (
         <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text style={{color: "#f8e9f3", fontStyle: "italic"}}>
                          We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Row>
                    <Col>
                    <Form.Control placeholder="First name" className='mb-3'/>
                    </Col>
                    <Col>
                    <Form.Control placeholder="Last name" className='mb-3'/>
                    </Col>
                </Row>
                <FloatingLabel controlId="floatingTextarea2" label="Comments" className='mb-3'>
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        />
                </FloatingLabel>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button style={{ background: "pink", border: "2px solid red", color: "black"}} type="submit">
                        Submit
                </Button>
             </Form>
  )
}

export default ContactForm