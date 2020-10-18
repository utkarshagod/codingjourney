import React from 'react';
import { Form,Image} from 'react-bootstrap';




const AdviceLocation = () => {
    return(
        <div className="container">
            <div className="py-4">
            {/* <div className="bg"> */}
            <div>
              
            <Image src="https://tse2.mm.bing.net/th?id=OIP.3DH3SGukg7gizjtKYvHzXQAAAA&pid=Api&P=0&w=167&h=156" thumbnail  style={{borderBlockStartWidth:"10%",marginTop:"2%"}}  />
    
            </div>
            
            
            

            


            <div className="wrapper">
            <div className="form-wrapper">
                 <Form  >
                
                  <row>
                  
  <Form.Group controlId="exampleForm.ControlInput1">
  
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com"  required />
    
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select Location</Form.Label>
    <Form.Control as="select" required>
      <option>Hadpsar</option>
      <option>Magarpatta</option>
      <option>Indraprath</option>
      <option></option>
      <option></option>
    </Form.Control>
  </Form.Group>
  {/* <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Example multiple select</Form.Label>
    <Form.Control as="select" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group> */}
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Discription</Form.Label>
    <Form.Control as="textarea" rows="3" required />
  </Form.Group>
  
  {/* <Button variant="primary" type="submit">
    Submit
  </Button> */}

  <div className="createAccount">
              <button type="submit">Submit</button>
              </div>
  </row>
</Form>
</div>















      </div>
        </div>
            </div>
    );
};

    export default AdviceLocation;