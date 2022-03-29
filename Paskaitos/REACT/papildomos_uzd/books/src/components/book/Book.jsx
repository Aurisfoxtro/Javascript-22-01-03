import "./Book.css";

function Book(props) {
    return (
      <div className="card">
        <h3>{props.genre}</h3>
        <h3>{props.content.author}</h3>
        <h3>{props.content.title}</h3>
        <img src={props.content.img} alt={props.content.title}/>
        <h3>{props.content.price} Eur</h3>
      </div>
    );
  }
  
  export default Book;