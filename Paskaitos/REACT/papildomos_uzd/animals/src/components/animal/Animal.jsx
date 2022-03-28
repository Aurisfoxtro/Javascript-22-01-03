import "./Animal.css"

function Animal(props) {

    const generate = () =>{
        return Math.floor(Math.random()*255);
      }
      
      const color = "rgb(" + generate() + ',' + generate() + ',' + generate() + ')'
      console.log(color);

    const style = {
        backgroundColor: color
    }

    return (
      <div className="container">
          <img width="400px" height="300px" src={props.img} alt={props.animal} />
          <h3 style={style} >{props.animal}</h3>
      </div>
    );
  }
  
  export default Animal;