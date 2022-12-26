import React from "react";
import { useBoots } from "../contexts/boots";
import { Image } from "antd";
import { Link } from "react-router-dom";
import '../styles/boots.css';

function Boots({setCategory}) {
    const [boots] = useBoots();

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          id="img_top_boots"
          style={{ width: "100%", height: "300px", padding: "10px 20px" }}
          src="https://d1b7fmvx5bzyfc.cloudfront.net/wysiwyg/immagini-categorie/BOOTS.jpg"
          alt="MEN'S LUXURY ITALIAN BOOTS"
        />
        <div id="img_t">
          <h2>MEN'S LUXURY ITALIAN BOOTS</h2>
          <p>
            Make an unconventional style choice by purchasing an amazing pair of
            boots from our online store. On IsuiT - Italian Luxury you can find
            a lot of fantastic boots signed by the best Italian men’s designers
            like Cesare Attolini, Kiton, and Santoni. Quality boots with finest
            fabrics like leather, leather crocodile, and many others. Stand out
            wearing our fantastic boots and walk "foot to foot" with quality.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="boots">
          {boots?.map((val, idx) => {
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

export default Boots;
