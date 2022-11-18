import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';


function Login() {

    const [inputs, setInputs] = useState({});
    
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
    }

  return (


    <Form className="LogInForm" onSubmit={handleSubmit}>
      <p className="Title">Log in!</p>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
          placeholder="Password"
          required
        />
      </Form.Group>

      <Button variant="success" type="submit" className="SignUpButton">
        Sign up
      </Button>

    </Form>
  );
}

export default Login;
