import React from "react";
import { Link } from "react-router-dom";
import { useJeans } from "../contexts/jeans";
import { Image } from "antd";
import "../styles/jeans.css";

function Jeans({setCategory}) {
  const [jeans] = useJeans();

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          id="img_top"
          src="https://d1b7fmvx5bzyfc.cloudfront.net/wysiwyg/immagini-categorie/BANNER-BELT.jpg"
          alt="MEN'S ITALIAN DESIGNER JEANS"
        />
        <div id="img_t">
          <h2>MEN'S ITALIAN DESIGNER JEANS</h2>
          <p>
            Discover on IsuiT - Italian Luxury our fantastic men’s jeans
            collection. Many luxury brands available in our selection: Kiton,
            Kired, KNT, Zilli, Marco Pescarolo, Sartoria Tramarossa and more! A
            wide choice of slim and regular models, denim or classic styles,
            solid or striped patterns and many fabrics such as cotton, linen and
            wool.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="jeans">
          {jeans?.map((val, idx) => {
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

export default Jeans;
