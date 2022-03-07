import React from "react";
let favorisList=[];

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
    }
    render(){
        return(
            <>
                <div className="card col-sm-3">
                    <h5 className="card-title">{this.props.id}</h5>
                    <p className="card-text">{this.props.joke}</p>
                    <button className="btn btn-primary" onClick={this.handleAddFavorites}>Saugoti</button>
                </div>
                
            </>
        )
    }
}

export default Joke