import { useState } from "react"
import {Form, Button} from "react-bootstrap"
import { useGlobalContext } from "../../context/MessageContext"

const AddMessage = () =>{
    const {addMessage, closeForm} = useGlobalContext();
    const [newMessage, setNewMessage] = useState({
        'title': '',
        'desc': '',
        'url': ''
    })
    const handleChange = (e)=>{
        setNewMessage({
            ...newMessage,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        addMessage(newMessage)
        closeForm()
    }
    console.log('new message: ', newMessage);
    return(
        <Form className="m-2" onSubmit={submitHandler}>
            <Form.Group className="mt-2">
                <Form.Control
                    type="text"
                    placeholder= "Žinutės pavadinimas"
                    value={newMessage.title}
                    onChange={handleChange}
                    name="title"
                />
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Control 
                    as="textarea"
                    value={newMessage.desc}
                    onChange={handleChange}
                    name="desc"
                />
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Control 
                    type="text"
                    placeholder="Paveikslėlio adresas"
                    value={newMessage.url}
                    onChange={handleChange}
                    name="url"
                />
            </Form.Group>
            <Button type="submit" className="mt-2">
                Confirm
            </Button>
        </Form>
    )
}

export default AddMessage