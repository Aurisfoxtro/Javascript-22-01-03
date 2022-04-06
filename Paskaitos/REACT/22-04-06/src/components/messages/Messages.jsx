import { useState } from "react";
import {Container, Button} from "react-bootstrap"
import { useGlobalContext } from "../../context/MessageContext"
import AddMessage from "../addmessage/AddMessage";
import Message from "../message/Message";

const Messages = () =>{
    const {messages, isOpen, openForm } = useGlobalContext();

    const [likes, setLikes] = useState(0);

    const likesClickHandler = () =>{
        setLikes(likes + 1)
    }
    console.log('Likes:', likes);
    console.log("Messages: ", messages);
    return(
        <Container>
            <h2 className="m-5 text-center">Your Messages</h2>
            <div className=" m-3 text-center">
                <Button onClick={openForm} className="mx-auto">Add Message</Button>
            </div>
            {(isOpen) && <AddMessage/>}
            
                {(messages) && messages.map((message, i) => (message.title) && <Message
                key= {i}
                title = {message.title}
                desc = {message.desc}
                url = {message.url}
                />
                )}
        
        </Container>
    )
}
export default Messages