import { useContext, useState, useReducer } from "react";
import React from 'react';
import { newTask, deleteTask } from "../actions/TodoActions";
import TodoReducer from "../reducers/TodoReducer";


const AppContext = React.createContext(); //sukuriam context

const initialState={
    tasks:[
        {
            id:1,
            title: 'Learn React',
            desc: 'It is very important'
        },
        {
            id:2,
            title: 'Learn JS',
            desc: 'It is very important'
        },
        {
            id:3,
            title: 'Learn Node JS',
            desc: 'It is very important'
        }
    ],
    isOpen: false
}
const AppProvider = ({children})=>{ //sukuriam provider

    const [state, dispatch] = useReducer(TodoReducer, initialState)

    const addTask = (data)=>{
        dispatch(newTask(data))
    }

    const removeTask = (id)=>{
        dispatch(deleteTask(id))
    }
    // const [tasks, setTasks] = useState(
    //     [
    //         { 
    //         title:'Learn React',
    //         desc: 'It is very important'

    //     }
    // ]
    // );  //kuriam state

    const[isOpen, setIsOpen] = useState(false);

    // const addTask = (data)=>{  //kuriam state setinancia funkcija
    //     setTasks((prevData)=>{
    //         return [data, ...prevData]
    //     })
    // }

    const openForm =()=>{
        setIsOpen(true)
    }
    const closeForm =()=>{
        setIsOpen(false)
    }
    return (
        <AppContext.Provider value={{
            // tasks,  //isvardijam ka norim sharinti
            ...state,
            addTask,
            removeTask,
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