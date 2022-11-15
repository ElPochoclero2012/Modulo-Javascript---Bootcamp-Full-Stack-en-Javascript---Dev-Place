import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Counter = () => {

    const [counter, setCounter] = useState(0);

  return (
    <Button variant="success" id="buyButton" onClick={() =>{ setCounter (counter + 1)}}>Add to cart</Button>
  )
}

export default Counter;