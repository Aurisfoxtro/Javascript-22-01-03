import { useContext, useState } from "react";
import React from 'react';

const AppContext = React.createContext(); //sukuriam context
const AppProvider = ({children})=>{ //sukuriam provider
    
    const [messages, setMessages] = useState(
        [
            { 
            title:'',
            desc: '',
            url: ''
            }
        ]
    );  //kuriam state

    const[isOpen, setIsOpen] = useState(false);

    const addMessage = (data)=>{  //kuriam state setinancia funkcija
        setMessages((prevData)=>{
            return [data, ...prevData]
        })
    }

    // const openForm =()=>{
    //     setIsOpen(true)
    // }
    const closeForm =()=>{
        setIsOpen(false)
    }

    const openForm = ()=>{
        if(isOpen){
            setIsOpen(false)
        }else{
            setIsOpen(true)
        }
    }

    return (
        <AppContext.Provider value={{
            messages,  //isvardijam ka norim sharinti
            addMessage,
            isOpen,
            openForm,
            closeForm
        }}>
            {children}  
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}