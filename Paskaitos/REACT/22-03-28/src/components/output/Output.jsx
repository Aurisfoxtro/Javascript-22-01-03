import "./Output.css";

function Output(props) {
    return (
      <div className="container m-5">
            <div className="output_container">
                <p id="content" className="output">Vardas: {props.content.name}<br/> Pavardė: {props.content.surname}<br/> El. paštas: {props.content.email}<br/> Telefono nr.: {props.content.phone}</p>
            </div>
      </div>
    );
  }
  
  export default Output;