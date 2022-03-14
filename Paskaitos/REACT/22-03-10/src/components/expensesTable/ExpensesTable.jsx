import React from 'react'
import {Table} from 'react-bootstrap'
import Expense from '../expense/Expense'

const ExpensesTable =(props)=>{

    return(
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
            
            {/* {(expenses.length)? */}
            {props.data.map((ex, i) =>
            <Expense
                key={i} //identifikatorius padidejantis per vieneta
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