import Header from "../header/Header";
import "./Main.css";
import {useState} from 'react';
import Form from "../form/Form";
import Output from "../output/Output";

function Main() {

    const [contact, setContact] = useState({});
    const [showForm, setShowForm] = useState(false);
    const clickHandler = () => {
      setShowForm(true);
    }
    
    const onDataSaveHandler = (receivedContact) =>{
      const contact = {
        ...receivedContact,
        id: Math.random().toString()
      }
      setContact(contact)
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
            <Output content={contact}/>
        </div>
      </>
    );
  }
  
  export default Main;