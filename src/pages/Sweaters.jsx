import React from "react";
import { Link } from "react-router-dom";
import { useSweaters } from "../contexts/sweaters";
import "../styles/sweaters.css";
import { Image } from "antd";

function Sweaters({setCategory}) {
  const [sweaters] = useSweaters();

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          id="img_top_sw"
          style={{ width: "100%", height: "350px", padding: "10px 20px" }}
          src="https://d1b7fmvx5bzyfc.cloudfront.net/wysiwyg/immagini-categorie/BANNER-SWEATER.jpg"
          alt="MEN'S ITALIAN DESIGNER JEANS"
        />
        <div id="img_t">
          <h2>MEN'S LUXURY ITALIAN DESIGNER SWEATERS AND JUMPERS</h2>
          <p>
            Whether you prefer a sweater polo, gilet, cardigan or v-neck, we
            have them all, made in Italy and luxury brands. Available to browse
            and purchase online, we have all the best brands, and you can be
            proud of wearing your new sweater which was hand-made in Italy. On
            IsuiT - Italian Luxury you can browse a wide selection of men’s
            sweaters able to satisfy all tastes: many patterns, colors and
            fabrics among silk, cotton and cashmere.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="sweaters">
          {sweaters?.map((val, idx) => {
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

export default Sweaters;
