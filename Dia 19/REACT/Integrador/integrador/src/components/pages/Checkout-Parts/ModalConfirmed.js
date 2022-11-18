import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

  
export const ModalConfirmed = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  return (
    <>
    <Button variant="success" onClick={handleShow}>
        Finish!
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Done! Now you can close this tab</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => window.open('/', '_self') && localStorage.clear()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

