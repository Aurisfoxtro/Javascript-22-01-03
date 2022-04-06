import "./Message.css"
import {Button} from "react-bootstrap";
import { useState } from "react";

const Message = (props)=>{

    const [likes, setLikes] = useState(0);

    const likesClickHandler = () =>{
        setLikes(likes + 1)
    }
    console.log('Likes:', likes);

    return(
        <>
            <div className="card text-center">
                {(props.url) && <img src={props.url} alt="Messages picture" />}
                <h3>{props.title}</h3>
                <div>{props.desc}</div>
                <div className="likes-container">
                    <div>Likes: {likes}</div>
                    <Button onClick={likesClickHandler} className="btn btn-info m-2">Like</Button>
                </div>
            </div>
        </>

    )
}

export default Message