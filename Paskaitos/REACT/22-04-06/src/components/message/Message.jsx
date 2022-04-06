import "./Message.css"
import {Button} from "react-bootstrap";

const Message = (props)=>{

    const likeButtonHandler = () => {
        
    }

    return(
        <>
            <div className="card text-center">
                {(props.url) && <img src={props.url} alt="Messages picture" />}
                <h3>{props.title}</h3>
                <div>{props.desc}</div>
                <div className="likes-container">
                    <div>Likes: {props.likes}</div>
                    <Button onClick={likeButtonHandler} className="btn btn-info">Like</Button>
                </div>
            </div>
        </>

    )
}

export default Message