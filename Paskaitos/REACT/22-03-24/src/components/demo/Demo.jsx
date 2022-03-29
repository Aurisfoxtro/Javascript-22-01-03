import { useEffect } from "react";
import { useState } from "react"

const Demo = () =>{
    useEffect(()=>{console.log('Efektas veikia')},[sayHi]) //[] component did mount, [sayHi] component did update, su lauztiniais skliaustais tik viena kart useEffectas prasisuka, be ju efektas suveikia per komponento renderinimus, jei nurodom state (arba props) tada suveikia per state (arba props) pasikeitima
    // useEffect(()=>{return function cleanup(){}},[sayHi]) //component cleaned up
    const [sayHi, setSayHi] = useState('');
    if(sayHi.length === 0){
    return(
        <div className= "container">
            <button onClick={()=>{setSayHi('Labas')}}>Spausk</button>
        </div>
    )}else{
        return(
            <div className="container">
                <p>{sayHi}</p>
            </div>
        )
    }
}

export default Demo