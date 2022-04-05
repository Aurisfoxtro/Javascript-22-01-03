import '../../scss/style.scss'
import Autocomplete from '../autocomplete/Autocomplete';
import Movie from '../movie/Movie';

function Main() {
  return (
    <div className="container">
      <div className="search-box">
        <Search />
      </div>
      <Movie />
    </div>
  );
}

export default Main;