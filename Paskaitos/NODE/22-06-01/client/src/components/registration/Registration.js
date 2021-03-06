import React, {useState} from 'react'
import Alert from 'react-bootstrap/Alert'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import './Registration.css'

export default () =>{

    const [registerForm, setRegisterForm] = useState({
        first_name:'',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        role: 0
    })

    const [messages, setMessages] = useState({message: '', status: ''})
    const navigate = useNavigate()

    const handleInputChange = (e) =>{
        setRegisterForm({
            ...registerForm,
            [e.target.name]:e.target.value
        })
    }

    const handleValidation = () =>{
        for(let index of Object.keys(registerForm)){
            if(registerForm[index] === ''){
                return false
            }
        }
        return true    
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!handleValidation()){
            setMessages({message: 'Netinkamai užpildyta forma', status: 'danger'})
            return false
        }
        if(registerForm.password !== registerForm.confirm_password){
            setMessages({message: 'Slaptažodžiai nesutampa', status: 'danger'})
            return false
        }
        axios.post('/api/users/register/', registerForm)
        .then(resp => {
            if(resp.data.status === 'success'){
                setTimeout( ()=> {
                    navigate('/create-profile')
                }, 2000)
            }else{
                setMessages({message: resp.data.message, status: resp.data.status})
            }
        })
        .catch(()=>{
            setMessages({message: 'Įvyko serverio klaida', status: 'danger'})
        })
    }

    return(
        <div className="text-center">
        <main className="form-signin w-25 m-auto">
            {messages.message && (
                <Alert variant={messages.status}>{messages.message}</Alert>
            )}
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Registracija</h1>
                <div className="form-floating mb-1">
                    <input type="text" className="form-control" name="first_name" value={registerForm.first_name} onChange={e => handleInputChange(e)} />
                    <label>Vardas</label>
                </div>
                <div className="form-floating mb-1">
                    <input type="text" className="form-control" name="last_name" value={registerForm.last_name} onChange={e => handleInputChange(e)}/>
                    <label>Pavardė</label>
                </div>
                <div className="form-floating mb-1">
                    <input type="email" className="form-control" name="email" value={registerForm.email} onChange={e => handleInputChange(e)}/>
                    <label>El. pašto adresas</label>
                </div>
                <div className="form-floating mb-1">
                    <input type="password" className="form-control" name="password" value={registerForm.password} onChange={e => handleInputChange(e)}/>
                    <label>Slaptažodis</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" name="confirm_password"  value={registerForm.confirm_password} onChange={e => handleInputChange(e)}/>
                    <label>Slaptažodžio patvirtinimas</label>
                </div>
                <div className="form-floating mb-3">
                    <select className='form-control' name="role" onChange={e=> handleInputChange(e)}>
                        <option value='0'>Vartotojas</option>
                        <option value='1'>Administratorius</option>
                    </select>
                    <label>Vartotojo rolė</label>
                </div>
                <button className="w-50 btn btn-lg btn-primary" type="submit">Registruotis</button>
            </form>
        </main>
        </div>
    )
}