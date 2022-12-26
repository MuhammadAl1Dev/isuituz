import React from "react";
import '../styles/homepage.css';

function HomePage() {
  return (
    <div>
      <div>
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://d1b7fmvx5bzyfc.cloudfront.net/wysiwyg/homepage/BANNER_GRANDE.jpg"
          alt="home img"
        />
      </div>
      <div>
        <div
          style={{
            background: "#E6E6E6",
            paddingTop: "20px",
            textAlign: "center",
            paddingBottom: '20px'
          }}
        >
          <h1><b>Main Products</b></h1>
          <h5>DISCOVER MORE</h5>
        </div>
        
        <div id="cards_center">
          <div className="col" style={{padding: '10px 20px'}}>
            <div className="card" style={{border: 'none'}}>
              <img src="https://d1b7fmvx5bzyfc.cloudfront.net/wysiwyg/BANNER_WOOLRICH.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h2 className="card-title text-center"><b>Woolrich</b></h2>
                <p className="card-text text-center">
                 EXPLORE THE COLLECTION
                </p>
              </div>
            </div>
          </div>
          <div className="col" style={{padding: '10px 20px'}}>
            <div className="card" style={{border: 'none'}}>
              <img src="https://d1b7fmvx5bzyfc.cloudfront.net/wysiwyg/BANNER_PREMIATA.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h2 className="card-title text-center"><b>Premiata</b></h2>
                <p className="card-text text-center">
                  EXPLORE THE COLLECTION
                </p>
              </div>
            </div>
          </div>
          <div className="col" style={{padding: '10px 20px'}}>
            <div className="card" style={{border: 'none'}}>
              <img src="https://d1b7fmvx5bzyfc.cloudfront.net/wysiwyg/BANNER_PESCAROLO.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h2 className="card-title text-center"><b>Marco Pescarolo</b></h2>
                <p className="card-text text-center">
                  NEW COLLECTION
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div
          style={{
            background: "#E6E6E6",
            paddingTop: "20px",
            textAlign: "center",
            paddingBottom: '20px'
          }}
        >
          <h1><b>Best Seller</b></h1>
          <h5>DISCOVER MORE</h5>
        </div>
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://d1b7fmvx5bzyfc.cloudfront.net/wysiwyg/homepage/BANNER_SALE_1.jpg"
          alt="home img"
        />
      </div>
    </div>
  );
}

export default HomePage;
