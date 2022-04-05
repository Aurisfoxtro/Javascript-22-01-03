import { useContext, useState } from "react";
import React from 'react';

const AppContext = React.createContext(); //sukuriam context
const AppProvider = ({children})=>{ //sukuriam provider
    const [tasks, setTasks] = useState(
        [
            { 
            title:'Learn React',
            desc: 'It is very important'

        }
    ]
    );  //kuriam state

    const[isOpen, setIsOpen] = useState(false);

    const addTask = (data)=>{  //kuriam state setinancia funkcija
        setTasks((prevData)=>{
            return [data, ...prevData]
        })
    }

    const openForm =()=>{
        setIsOpen(true)
    }
    const closeForm =()=>{
        setIsOpen(false)
    }
    return (
        <AppContext.Provider value={{
            tasks,  //isvardijam ka norim sharinti
            addTask,
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