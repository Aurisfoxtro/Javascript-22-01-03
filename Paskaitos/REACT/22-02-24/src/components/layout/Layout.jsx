import "./layout.css";
import Sidebar from "../sidebar/Sidebar";
import Welcome from "../welcome/Welcome";
import Navbar from "../navbar/Navbar";

function Layout() {
    return (
      <div className="container-fluid">
        <div className="container">
          <Navbar/>
        </div>
        <div className="container-fluid main">
          <div className="container">
            <Welcome/>
            <div className="row article">
              <div className="col-8">
                <p className="first_article">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor blanditiis voluptates eius sequi quaerat sunt voluptatum repellendus reprehenderit. Rerum, commodi sit veniam facilis sequi hic. Beatae accusantium qui soluta laboriosam voluptas magnam eveniet mollitia iste, natus praesentium? Alias voluptate eius sit sapiente, ipsa ab, repellendus optio pariatur ut et earum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod adipisci sed voluptates ad voluptatem esse sunt quae dolore molestiae, magni eius ut obcaecati laudantium expedita laborum dignissimos soluta beatae odit possimus, nemo quis debitis. Blanditiis, doloremque sapiente perspiciatis ullam, voluptas at quas culpa consequatur necessitatibus quaerat, impedit sint neque quidem.</p>
              </div>
              <Sidebar/>
            </div>
            <div className="row footer">
            </div>
          </div>  
        </div>
      </div>
    );
  }
  
  export default Layout;