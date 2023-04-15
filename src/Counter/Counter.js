import React, {useState} from "react";
import { Container,Card,Row,Col,Button} from "react-bootstrap";

const Counter = () => {
  
  const[state, setState] = useState({
    count: 0
  });

  const incr = () => {
    setState( {
        count:state.count+1
    });

  }
  const decr = () => {
    setState(  {
        count:state.count-1
    });

  }
  return(
   <div>

   <Container className="mt-3">
    <Row>
        <Col xs={4}>
            <Card className="Shadow-lg">
                <Card.Body>
                    <p className="display-2">{state.count}</p>
                    <Button onClick={incr} variant="success" className="m-1">Increment</Button>
                    <Button onClick={decr} variant="warning" className="m-1">Decrement</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
   </Container>
  
  
  
  </div>
  );
};
export default Counter;
