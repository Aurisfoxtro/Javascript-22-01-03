import { useState } from "react";
import Form from "../form/Form";
import Table from "../table/Table";

function Main() {

    const [tableData, setTableData] = useState({rows: 0, columns: 0})
    const onSaveDataHandler = (data) =>{
      console.log(data)
      setTableData(data)
    }

    return (
      <>
        <h3>Lentelės generatorius</h3>
        <Form onSaveData={onSaveDataHandler}/>
        <h3>Sukurta lentelė</h3>
        <Table dimensions={tableData}/>
      </>
    );
  }

export default Main;