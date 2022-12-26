import React from "react";
import { Image } from "antd";
import { Link } from "react-router-dom";
import { useBags } from "../contexts/bags";
import '../styles/bags.css';

function Bags({setCategory}) {
    const [bags] = useBags();

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          id="img_top_bags"
          style={{ width: "100%", height: "300px", padding: "10px 20px" }}
          src="https://d1b7fmvx5bzyfc.cloudfront.net/wysiwyg/immagini-categorie/BANNER-BAGS.jpg"
          alt="MEN'S DESIGNER LUXURY BAGS"
        />
        <div id="img_t">
          <h2>MEN'S DESIGNER LUXURY BAGS</h2>
          <p>
            Shopping, traveling for business, or going out with friends, don't
            forget to bring everything you need: on IsuiT - Italian Luxury is
            available a wide selection of bags, backpacks, briefcases, document
            cases, and Carry-on Suitcases. Quality products made with the fine
            fabrics supplied by the best men’s fashion designers: you can find
            Kiton bags and briefcases made with leather or crocodile leather.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="bags">
          {bags?.map((val, idx) => {
            return (
              <div className="card" id="cards" key={idx}>
                <Image.PreviewGroup>
                  <Image src={val.img} style={{height: '400px'}} />
                </Image.PreviewGroup>
                <div className="card-body">
                  <h4 className="card-title"><b>{val.title}</b></h4>
                  <p className="card-text">{val.desc}</p>
                  <b>${val.price}</b>
                  <br />
                  <Link to={"/category"} onClick={()=>setCategory([val])}>
                    <button
                      id="quick_btn"
                      className="btn btn-outline-secondary"
                    >
                      QUICK SHOP
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Bags;
