import React from "react";
import { Image } from "antd";
import { Link } from "react-router-dom";
import "../styles/hats.css";
import { useHats } from "../contexts/hats";

function Hats({setCategory}) {
    const [hats] = useHats();

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          id="img_top_hats"
          style={{ width: "100%", height: "300px", padding: "10px 20px" }}
          src="https://d1b7fmvx5bzyfc.cloudfront.net/wysiwyg/immagini-categorie/HATS.jpg"
          alt="MEN’S LUXURY DESIGNER ITALIAN HATS"
        />
        <div id="img_t">
          <h2>MEN’S LUXURY DESIGNER ITALIAN HATS</h2>
          <p>
            Available on IsuiT - Italian Luxury a fantastic selection of luxury
            hats made by Kiton, one of the best men’s designers in Italy. A
            quality accessory made entirely in Italy with the finest fabrics
            like wool, cashmere, or rabbit fur, solid, geometric, or
            plaids&checks patterns to satisfy every taste and style. Bucket
            hats, designer beanies, and more!
          </p>
        </div>
      </div>
      <div className="container">
        <div className="hats">
          {hats?.map((val, idx) => {
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

export default Hats;
