import React from "react";
import { Link } from "react-router-dom";
import { useShirts } from "../contexts/shirts";
import "../styles/shirts.css";
import { Image } from "antd";

function Shirts({setCategory}) {
  const [shirts] = useShirts();

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          id="img_top_shirts"
          style={{ width: "100%", height: "340px", padding: "10px 20px" }}
          src="https://d1b7fmvx5bzyfc.cloudfront.net/wysiwyg/immagini-categorie/SHIRT.jpg"
          alt="MEN'S ITALIAN DESIGNER JEANS"
        />
        <div id="img_t">
          <h2>ITALIAN DESIGNER LUXURY SHIRTS FOR MEN</h2>
          <p>
            If you are looking for A designer shirt, IsuiT is the best online
            store where you can find Luxury shirts “Made in Italy” and the Top
            Italian shirts brands for sale. Shop men’s luxury shirts at IsuiT -
            Italian Luxury. Discover the best online selection of Made in Italy
            Shirts, men's fashion designers like Kiton, Cesare Attolini, Luigi
            Borrelli, Zilli, Sartorio Napoli and much more, suitable for every
            season, taste, and style. Discover some of the best men's dress
            shirts made in Italy.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="shirts">
          {shirts?.map((val, idx) => {
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

export default Shirts;
