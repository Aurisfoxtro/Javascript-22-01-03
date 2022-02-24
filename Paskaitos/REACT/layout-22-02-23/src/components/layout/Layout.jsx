import "./layout.css";

function Layout() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-6">

            </div>
            <div className="col-6">
              <ul>
                <li><a href="#">Red</a></li>
                <li><a href="#">Blue</a></li>
                <li><a href="#">Green</a></li>
                <li><a href="#">Yellow</a></li>
                <li><a href="#">Pink</a></li>
                <li><a href="#">Purple</a></li>
              </ul>
            </div>
          </div>
          </div>
          <div className="row center gray">
            <h2 className="white_text">I Love Color</h2>
            <p className="white_text first_p">Color really isn't difficult to get right, if you know where to start.</p>
            <p className="white_text second_p">Learn by doing and you'll be a master in no time.</p>
              <div className="row center">
                <div className="col-5"></div>
                <button className="col-2">Over to you</button>
                <div className="col-5"></div>
              </div>
              <div className="row gap"></div>
              <div className="row gray bottom">
              <div className="col-2"></div>
              <div className="col-8">
                <div className="row">
                  <div className="col-3 poster">
                    <h6>Blue</h6>
                    <p className="post">Blue is the color of the sky and sea. It is often associated with depth and stability. It symbolizes trust, loyalty, wisdom, confidence, intelligence, faith, truth and heaven.</p>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-3 poster">
                    <h6>Green</h6>
                    <p className="post">Green is the color of nature. It symbolizes growth, harmony, freshness and fertility. Green has strong emotional correspondence with safety.</p>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-3 poster">
                    <h6>Red</h6>
                    <p className="post">Red is the color of fire and blood, so it is associated with energy, war, danger, strength, power, determination as well as passion, desire and love.</p>
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
              </div>
          </div>
        </div>  
    );
  }

  export default Layout;