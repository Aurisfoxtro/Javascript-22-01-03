import { useState } from "react"
import {Form, Button} from "react-bootstrap"
import { useGlobalContext } from "../../context/TasksContext"

const AddTask = () =>{
    const {addTask, closeForm} = useGlobalContext();
    const [newTask, setNewTask] = useState({
        'title': '',
        'desc': ''
    })
    const handleChange = (e)=>{
        setNewTask({
            ...newTask,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        addTask(newTask)
        closeForm()
    }
    console.log(newTask);
    return(
        <Form className="m-2" onSubmit={submitHandler}>
            <Form.Group className="mt-2">
                <Form.Control
                    type="text"
                    placeholder= "Užduoties pavadinimas"
                    value={newTask.title}
                    onChange={handleChange}
                    name="title"
                />
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Control 
                    as="textarea"
                    value={newTask.desc}
                    onChange={handleChange}
                    name="desc"
                />
            </Form.Group>
            <Button type="submit" className="mt-2">
                Pridėti užduotį
            </Button>
        </Form>
    )
}

export default AddTask