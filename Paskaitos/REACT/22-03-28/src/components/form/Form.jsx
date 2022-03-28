import {useState} from 'react';

function Form(props) {

    const [kontaktas, setKontaktas] = useState({
        name: '',
        surname: '',
        email: '',
        phone: ''
    })
    
    const submitHandler = (e) =>{
        // console.log(e);
        e.preventDefault();
        setKontaktas({
            name: e.target.name.value,
            surname: e.target.surname.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        })
        props.onDataSave(kontaktas);
        setKontaktas({
            name: '',
            surname: '',
            email: '',
            phone: ''
        })
    }
    console.log('kontaktas:', kontaktas);
    
    const nameHandler = (e) =>{
        setKontaktas({
            ...kontaktas,
            name: e.target.value
        })
        // console.log(e.target.value)
    }

    const surnameHandler = (e) =>{
        setKontaktas({
            ...kontaktas,
            surname: e.target.value
        })
    }

    const emailHandler = (e) =>{
        setKontaktas({
            ...kontaktas,
            email: e.target.value
        })
    }

    const phoneHandler = (e) =>{
        setKontaktas({
            ...kontaktas,
            phone: e.target.value
        })
    }

    return (
      <form onSubmit={submitHandler}>
          <input onChange={nameHandler} type="text" className="m-1" name="name" value={kontaktas.name} placeholder="Vardas" />
          <input onChange={surnameHandler} type="text" className="m-1" name="surname" value={kontaktas.surname} placeholder="Pavardė" />
          <input onChange={emailHandler} type="text" className="m-1" name="email" value={kontaktas.email} placeholder="El. paštas" />
          <input onChange={phoneHandler} type="text" className="m-1" name="phone" value={kontaktas.phone} placeholder="Telefono nr." />
          <button type="submit" className="btn btn-primary m-1">Patvirtinti</button>
      </form>
        
    );
  }
  
  export default Form;