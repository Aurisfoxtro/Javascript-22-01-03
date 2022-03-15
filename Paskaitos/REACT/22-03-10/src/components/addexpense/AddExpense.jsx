import {Card, Form, Button, FloatingLabel} from "react-bootstrap";
import React, {useState} from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Error from "../error/Error";
//
import expenseValidation from "../../utilities/expenseValidation";
//
const AddExpense = (props) =>{
    const[items, setItems] = useState({
        date:'',
        type:'',
        description:'',
        amount:''
    })
    const [errors, setErrors] = useState('');

    const handleChange =(e)=> {
        setItems({
            ...items,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const validate = expenseValidation(items); //validuojam duomenis
        // console.log(validate)
        setErrors(validate) //setinam state klaidas
        if(Object.keys(errors).length !== 0){ //tikrinam ar yra klaidu
            props.onSave(items)
        }
    }
    console.log('Items:', items);
    console.log(errors);
    return(
        <>
            <Card>
                <Card.Header>
                    Pridėkite išlaidas į išlaidų sąrašą
                </Card.Header>
                <Card.Body>
                    {errors &&
                        Object.keys(errors).map(keyName=>(<Error error={errors[keyName]}/>))
                    }
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3">
                            <Form.Label>Pasirinkite datą:</Form.Label>
                            <Form.Control type="date" name="date" value={items.date} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <FloatingLabel label="Pasirinkite išlaidų tipą">
                                <Form.Select name="type" value={items.type} onChange={handleChange}>
                                    <option>Pramogos</option>
                                    <option>Nuoma</option>
                                    <option>Kreditai</option>
                                    <option>Kuras</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                            as="textarea"
                            placeholder="Aprašykite išlaidas"
                            style={{height: '100px'}}
                            name="description"
                            value={items.description}
                            onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Išlaidų suma</Form.Label>
                            <Form.Control type="text" name="amount" value={items.amount} onChange={handleChange}/>
                        </Form.Group>
                        <Button type="submit">Saugoti</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default AddExpense