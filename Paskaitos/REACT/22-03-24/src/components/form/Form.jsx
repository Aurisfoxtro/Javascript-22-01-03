import {useState} from 'react'; //useState importas

const Form = ()=>{
    const [formData,setFormData] = useState(); //state kurimas

    const handleChange = (event)=>{
        // console.log(event.target.value);
        setFormData({
            ...formData,
            [event.target.name]:event.target.value //obj raktas ir reiksme
        }
        )
    }
    console.log('Mano formos duomenys', formData)
    return(
        <form>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Jūsų vardas" onChange={handleChange} name="name" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="El. paštas" onChange={handleChange} name="email" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Akių spalva" onChange={handleChange} name="color" />
            </div>
            <div className="form-group">
                <button type="submit">Siųsti</button>
            </div>
        </form>
    )
}

export default Form