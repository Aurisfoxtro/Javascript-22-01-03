import "./Grid.scss"
import Form from "../form/Form";

function Grid() {

  //rgb(123,22,12)
  const random = () =>{
    // console.log(Math.floor(Math.random()*255))
    return Math.floor(Math.random()*255)
  }

  const bgChange = (event) =>{
    let rndColor = 'rgb('+random()+','+random()+','+random()+')';
    // console.log(rndColor);
    // console.log(event);
    event.target.style.backgroundColor = rndColor;
    // #00dd88 padaryti su heksais.
  }

    return (
      <>
      <Form />
      <div className="col-3" onClick={bgChange}></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>      
      </>
    );
  }
  
  export default Grid;