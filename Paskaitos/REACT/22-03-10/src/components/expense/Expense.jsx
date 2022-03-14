const Expense = (props) =>{
    return(
        <tr>
            <td>{props.date}</td>
            <td>{props.type}</td>
            <td>{props.description}</td>
            <td>{Number.parseFloat(props.amount).toFixed(2)}</td>
        </tr>
    )
}

export default Expense