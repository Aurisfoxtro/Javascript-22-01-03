import { useState } from "react"
import {Button, Modal, Form, FormGroup} from "react-bootstrap" 

const AddTodo = ()=>{
    const [modal, setModal] = useState(false);

    const handleShow = () =>{
        setModal(true)
    }
    const handleClose = ()=>{
        setModal(false)
    }

    return(
        <div>
            <Button onClick={handleShow}>Nauja užduotis</Button>
            <Modal show={modal} onHide={handleClose}>
                <Modal.Header>Užduoties sukūrimas</Modal.Header>
                <Form>
                <Modal.Body>
                        <Form.Group>
                            <Form.Label>Pavadinimas</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Užduoties aprašymas</Form.Label>
                            <Form.Control
                                type="textarea"
                                name="description"
                            />
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Uždaryti</Button>
                    <Button variant="primary" type="submit">Pridėti</Button>
                </Modal.Footer>
                </Form>
            </Modal>
        </div>    
    )
}

export default AddTodo