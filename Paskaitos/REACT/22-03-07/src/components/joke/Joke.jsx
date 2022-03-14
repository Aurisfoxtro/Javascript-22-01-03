import React from "react";
let favorisList=[];

//
// let visible = true;
//
class Joke extends React.Component{
    constructor(){
        super();
        this.handleAddFavorites = this.handleAddFavorites.bind(this)
    }
    handleAddFavorites(){
        let obj = {}
        obj["id"]=this.props.id;
        obj["joke"]=this.props.joke;
        obj["categories"]=[];
        favorisList.push(obj);
        localStorage.setItem('favoritesJokes', JSON.stringify(favorisList))
        //
        // visible = false;
        //
    }
    render(){
        return(
            <>
                <div className="card col-sm-3">
                    <h5 className="card-title">{this.props.id}</h5>
                    <p className="card-text">{this.props.joke}</p>
                    {/* {(visible)? */}
                    <button className="btn btn-primary" onClick={this.handleAddFavorites}>Saugoti</button>
                     {/* :<p>Juokelis išsaugotas</p>
                     } */}
                </div>
                
            </>
        )
    }
}

export default Joke