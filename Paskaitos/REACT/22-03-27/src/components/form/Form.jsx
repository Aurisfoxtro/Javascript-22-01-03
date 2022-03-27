import {useState} from "react";

function Form() {

    const [rows, setRows] = useState('');
    const [columns, setColumns] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(e);
        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
        setRows(()=> e.target[0].value);
        setColumns(()=> e.target[1].value);
        console.log('Rows:', rows);
        console.log('Columns:', columns);
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