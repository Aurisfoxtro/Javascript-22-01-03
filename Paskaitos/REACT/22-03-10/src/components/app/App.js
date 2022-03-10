import {Container} from "react-bootstrap";
import Expenses from "../expenses/Expenses";
import Header from "../header/Header";
import './App.css';

function App() {
  return (
    <Container>
      <Header/>
      <Expenses/>
    </Container>
  );
}

export default App;
