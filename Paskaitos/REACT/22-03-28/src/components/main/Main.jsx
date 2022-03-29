import Header from "../header/Header";
import "./Main.css";
import {useState} from 'react';
import Form from "../form/Form";
import Output from "../output/Output";

function Main() {

    const [contact, setContact] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const clickHandler = () => {
      setShowForm(true);
    }
    
    const onDataSaveHandler = (receivedContact) =>{
      const contact = {
        ...receivedContact,
        id: Math.random().toString()
      }
      setContact((prevData)=> [contact, ...prevData])
      console.log('Contact', contact)
    }
    console.log('State contact:', contact);

    return (
      <>
        <Header />
        <div className="main">
            <h1>Sukurti naują kontaktą</h1>
            {(!showForm)&&<button onClick={clickHandler} className="btn btn-primary">Naujas kontaktas</button>
            }
            {(showForm)&& <Form onDataSave={onDataSaveHandler}/>}
            {(contact.length !== 0)? contact.map((c)=> <Output key = {c.id} content={c}/>):null}
        </div>
      </>
    );
  }
  
  export default Main;