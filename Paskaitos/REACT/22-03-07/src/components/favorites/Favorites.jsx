import React from "react";
import Joke from "../joke/Joke";

class Favorites extends React.Component{
    constructor(){
        super();
        this.state = {
            savedList:[]
        }
    }
    componentDidMount(){
        if(localStorage.length){
            this.setState((state)=>({
                savedList:state.savedList.concat(JSON.parse(localStorage.getItem('favoritesJokes')))
            }))
        }
    }
    render(){
        if(this.state.savedList.length){
            // console.log(this.state.savedList)
            return(
                <>
                    <h2>Saved Jokes list</h2>
                    <div className="row">
                    {this.state.savedList.map((j)=>(
                        <Joke
                            key={j.id}
                            id={j.id}
                            joke={j.joke}
                        />
                    ))}   
                    </div>
                </>
            )
        }else{
            return(
                <div className="saved">
                    <p>Išsaugotų juokelių nėra</p>
                </div>
            )
        }
        
    }
}

export default Favorites