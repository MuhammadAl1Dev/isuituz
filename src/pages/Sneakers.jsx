import React from "react";
import { Link } from "react-router-dom";
import { Image } from "antd";
import "../styles/sneakers.css";
import { useSneakers } from "../contexts/sneaker";

function Sneakers({setCategory}) {
    const [sneakers] = useSneakers();

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          id="img_top_snk"
          style={{ width: "100%", height: "300px",padding: "10px 20px" }}
          src="https://d1b7fmvx5bzyfc.cloudfront.net/wysiwyg/immagini-categorie/BANNER-SNEAKERS.jpg"
          alt="MEN'S LUXURY DESIGNER SNEAKERS"
        />
        <div id="img_t">
          <h2>MEN'S LUXURY DESIGNER SNEAKERS</h2>
          <p>
            Discover on IsuiT - Italian Luxury our fantastic shoes collection
            and all the different luxury brands available on our online store:
            Kiton, KNT, Tom Ford, Zilli, Santoni and many others. A huge
            selection of products with many models, patterns and colors to
            choose: shoes Made in Italy made with the best fabrics like leather
            crocodile or leather calf.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="sneakers">
          {sneakers?.map((val, idx) => {
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

export default Sneakers;
