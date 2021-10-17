// import { useState } from "react";
import { Button, Modal} from "react-bootstrap";
import movie from "../movies";


function BtnModal() {
    // const [show, setShow] = useState(false);
  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
    return (
        <>
          <Modal.Dialog>
        <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
       <p><img src={movie.poster} /></p> 
      </Modal.Body>
    
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
       </>
    )
  }
  
  export default BtnModal;