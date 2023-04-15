import React, {useState} from "react";
import {Container,Row,Col,Card, Form,Button} from "react-bootstrap";



const RegistrationForm = () => {
    const [state , setState] = useState({
        user : {
            username : '',
            email : '',
            password : ''
        }
    });

    const updateInput = (e) => {
        setState({
            ...state,
            user : {
                ...state.user,
                [e.target.name] : e.target.value
            }
        })
    };
    const Register = (e) =>{
        e.preventDefault();
        console.log(state.user);

    };
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
                                        <Form.Control
                                        name="username"
                                        onChange={updateInput}
                                         type="text" placeholder="Username" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                        name="email"
                                        onChange={updateInput} type="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control 
                                        name="password"
                                        onChange={updateInput} type="password" placeholder="Password" />
                                    </Form.Group>
                                   
                                    <Form.Group className="mb-3">
                                        <Button
                                        onClick={Register} variant="warning" type="submit">Register</Button>
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