import React from "react";
import {Container,Row,Col,Card, Form,Button} from "react-bootstrap";



const RegistrationForm = () => {
    return(
        <div>
            <Container className="mt-3">
                <Row>
                    <Col xs={3}>
                        <Card className="shadow-lg">
                            <Card.Header className="p-3" style={{backgroundColor:"orange"}} >
                                <h4>RegistrationForm</h4>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Username" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                   
                                    <Form.Group className="mb-3">
                                        <Button variant="warning" type="submit">Register</Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>

                        </Card>
                    </Col>

                </Row>
            </Container>
             
        </div>
    );
};
export default RegistrationForm;