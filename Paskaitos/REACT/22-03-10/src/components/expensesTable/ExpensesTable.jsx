import React from 'react'
import {Table} from 'react-bootstrap'
import expenseValidation from '../../utilities/expenseValidation'
import Expense from '../expense/Expense'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import * as services from '../../services/expensesServices'

const ExpensesTable =(props)=>{

    const {id}=useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        id && services.deleteExpense(id)
        navigate('/')
    }, [id])

    return(
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Data</th>
                <th>Išlaidų tipas</th>
                <th>Aprašymas</th>
                <th>Suma</th>
                <th>Redagavimas</th>
                <th>Šalinimas</th>
            </tr>
        </thead>
        <tbody>
            
            {/* {(expenses.length)? */}
            {props.data.map((ex, i) =>
            <Expense
                key={i} //identifikatorius padidejantis per vieneta
                id={ex.id}
                date={ex.date}
                type={ex.type}
                description={ex.description}
                amount={ex.amount}
            />)
            // <tr>
            //     <td>...</td>
            //     <td>...</td>
            //     <td>...</td>
            //     <td>...</td>
            // </tr> 
            }
            
        </tbody>

    </Table>
    )
}

export default ExpensesTable