import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react'
import Alert from 'react-bootstrap/Alert'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const userid = 4 // Statinis userio ID

export default ()=>{

    const [profileForm, setProfileForm] = useState({
        headline:'',
        subheadline: '',
        description: '',
        hourly_rate: 5,
        location: ''
    })

    const [messages, setMessages] = useState({message: '', status: ''})
    const navigate = useNavigate()

    const handleInputChange = (e) =>{
        setProfileForm({
            ...profileForm,
            [e.target.name]:e.target.value
        })
    }

    const handleValidation = () =>{
        for(let index of Object.keys(profileForm)){
            if(index === 'hourly_rate' && profileForm[index]< 0)
                return false
            if(profileForm[index] === ''){
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

        profileForm.UserId = userid

        axios.post('/api/profile/create/', profileForm)
        .then(resp => {
            if(resp.data.status === 'success'){
                setTimeout( ()=> {
                    navigate('/')
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
    <Container>
        <div className="profileCreate">
            <h1>Profilio kūrimas</h1>
            {messages.message && (
                <Alert variant={messages.status}>{messages.message}</Alert>
            )}
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Antraštė</label>
                <input type="text" name="headline" className="form-control" placeholder="Nuostabus programuotojas" value={profileForm.headline} onChange={(e)=>handleInputChange(e)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Poraštė</label>
                <input type="text" name="subheadline" className="form-control" placeholder="Dešimt metų darbo praktikos" value={profileForm.subheadline} onChange={(e)=>handleInputChange(e)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Prisistatymas</label>
                <textarea className="form-control" name="description" rows="3" value={profileForm.description} onChange={(e)=>handleInputChange(e)}></textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">Valandinis įkainis</label>
                <input type="number" name="hourly_rate" className="form-control" min="0" value={profileForm.hourly_rate} onChange={(e)=>handleInputChange(e)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Vieta</label>
                <input type="text" name="location" className="form-control" placeholder="Kaunas, Lietuva"  value={profileForm.location} onChange={(e)=>handleInputChange(e)}/>
            </div>
            <Button type="submit" variant="primary">Kurti profilį</Button>
            </form>
        </div>
    </Container>
    )
}