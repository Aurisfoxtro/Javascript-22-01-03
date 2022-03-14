import {Card, Button} from "react-bootstrap";
import React, {useState} from "react";
import AddExpense from "../addexpense/AddExpense";
import ExpensesTable from "../expensesTable/ExpensesTable";

const Expenses = ()=>{
    const[addExpense, setAddExpense] = useState(false);
    const [expenses, setExpenses] = useState([]);

    const saveExpenseHandler = (data) =>{
        setExpenses((prevData)=>{
            return [data, ...prevData]
        })
        setAddExpense(false);
    }
    console.log('expenses:',expenses);
    return(
        <>
            {/* jei addExpense yra true, parodo forma*/}
            {(addExpense) && <AddExpense onSave={saveExpenseHandler}/>}
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
                   <ExpensesTable data={expenses}/>
                </Card.Body>
            </Card>
        </>
    )
}

export default Expenses