import {Card, Table, Button} from "react-bootstrap";
import React, {useState} from "react";
import Expense from "../expense/Expense";
import AddExpense from "../addexpense/AddExpense";

const Expenses = ()=>{
    const[addExpense, setAddExpense] = useState(false);
    return(
        <>
            {/* jei addExpense yra true, parodo forma*/}
            {(addExpense) && <AddExpense/>}
            <Card>
                <Card.Header>
                    {(addExpense)?
                    <Button className="btn btn-danger" onClick={()=>{setAddExpense(false)}}>Atšaukti</Button>
                    :
                    <Button className="btn btn-primary m-2" onClick={()=>setAddExpense(true)}>Pridėti išlaidas</Button>
                    }
                </Card.Header>
                <Card.Header>
                    <h3>Išlaidų sąrašas:</h3>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Išlaidų tipas</th>
                                <th>Aprašymas</th>
                                <th>Suma</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                        </tbody>

                    </Table>
                </Card.Body>
            </Card>
        </>
    )
}

export default Expenses