import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

function Register() {

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

    <Form className="RegisterForm" onSubmit={handleSubmit}>

        <p className="Title">Not a member? </p><p className="Title">Sign up!</p>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="realname" value={inputs.realname || ""} onChange={handleChange} placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" value={inputs.username || ""} onChange={handleChange} placeholder="Enter username" />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={inputs.email || ""} onChange={handleChange} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={inputs.password || ""} onChange={handleChange}  placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" name="phoneNumber" value={inputs.phoneNumber || ""} onChange={handleChange}  placeholder="(555) 555-5555" />
      </Form.Group>

  

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Suscribe for Newspaper" />
      </Form.Group>
      
      <Button variant="success" type="submit" className="SignUpButton">
        Sign up
      </Button>
      
      </Form>
  )
}

export default Register