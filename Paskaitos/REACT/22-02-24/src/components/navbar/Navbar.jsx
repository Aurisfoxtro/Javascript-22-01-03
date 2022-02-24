function Navbar() {
    return (
        <div className="row">
        <div className="logo col-2">
          <h2>gartner</h2>
        </div>
        <div className="nav col-4 offset-6">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }

export default Navbar;