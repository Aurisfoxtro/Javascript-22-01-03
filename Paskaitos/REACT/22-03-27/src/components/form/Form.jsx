import {useState} from "react";

function Form(props) {

    const [rows, setRows] = useState('');
    const [columns, setColumns] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(e);
        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
        setRows(e.target.rows.value);
        setColumns(e.target.columns.value);
        console.log('Rows:', rows);
        console.log('Columns:', columns);
        const data = {rows: rows, columns: columns}
        props.onSaveData(data);
    }

    return (
      <>
          <form onSubmit={submitHandler}>
            <input type="text" placeholder="Įveskite eilučių skaičių" name="rows"/>
            <input type="text" placeholder="Įveskite stulpelių skaičių" name="columns"/>
            <button type="submit">Kurti lentelę</button>
          </form>
      </>
    );
  }

export default Form;