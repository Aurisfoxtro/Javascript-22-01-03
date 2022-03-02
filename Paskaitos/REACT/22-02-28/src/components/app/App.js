import Nav from '../nav/Nav';
import Header from '../header/Header';
// import Posts from '../posts/Posts';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import './App.css';

const App = () => {
  return(
    <>
      <Nav/>
        <Header/>
        {/* <Posts/> */}
        <Main/>
        <Footer/>
    </>
  )
}

export default App;
