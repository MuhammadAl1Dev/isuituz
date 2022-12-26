import React from "react";
import "../styles/tshirt.css";
import { Link } from "react-router-dom";
import { useTShirt } from "../contexts/tshirt";
import { Image } from "antd";

function TShirt({ setCategory }) {
  const [tshirt] = useTShirt();

  console.log(tshirt);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          id="img_top_tsh"
          style={{ width: "100%", height: "300px", padding: "10px 20px" }}
          src="https://d1b7fmvx5bzyfc.cloudfront.net/wysiwyg/immagini-categorie/T-SHIRT.jpg"
          alt="MEN'S ITALIAN DESIGNER JEANS"
        />
        <div id="img_t">
          <h2>MEN'S LUXURY DESIGNER ITALIAN T-SHIRTS</h2>
          <p>
            Shop men's t-shirts on IsuiT - Italian Luxury from our many
            collections. A wide selection of the best luxury designer brands
            including Kiton, Cesare Attolini, Diesel, Paul & Shark, KNT. Check
            all our collections and choose the pattern or color that best suits
            your style and tastes. Choose the sobriety of a single-color tshirt
            or the particularity of a pattern, without ever sacrificing style
            and quality. 100% made in Italy.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="tshirt">
          {tshirt?.map((val, idx) => {
            return (
              <div className="card" id="cards" key={idx}>
                <Image.PreviewGroup>
                  <Image src={val.img} style={{ height: "400px" }} />
                </Image.PreviewGroup>
                <div className="card-body">
                  <h4 className="card-title">
                    <b>{val.title}</b>
                  </h4>
                  <p className="card-text">{val.desc}</p>
                  <b>${val.price}</b>
                  <br />
                  <Link to={"/category"} onClick={() => setCategory([val])}>
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

export default TShirt;
