import './App.css';
import {useGlobalContext} from "./components/context/LikeContext"

function App() {
  const {likes, setLike, removeLike} = useGlobalContext();
  return (
    <div>
      <h1>Reducers</h1>
      <p>Likes: {likes}</p>
      <button onClick={setLike}>Like</button>
      <button onClick={removeLike}>Dislike</button>
    </div>
  );
}

export default App;
