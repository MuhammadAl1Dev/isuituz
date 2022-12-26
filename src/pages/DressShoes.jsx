import React from "react";
import { Link } from "react-router-dom";
import "../styles/dressshoes.css";
import { Image } from "antd";
import { useDressShoes } from "../contexts/dressShoes";

function DressShoes({setCategory}) {
  const [dressShoes] = useDressShoes();

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          id="img_top_dresssh"
          style={{ width: "100%", height: "300px", padding: "10px 20px" }}
          src="https://d1b7fmvx5bzyfc.cloudfront.net/wysiwyg/immagini-categorie/DRESS-SHOES.jpg"
          alt="ITALIAN MEN'S FORMAL AND DRESS SHOES"
        />
        <div id="img_t">
          <h2>ITALIAN MEN'S FORMAL AND DRESS SHOES</h2>
          <p>
            The quality and the elegance of Made in Italy: these are the main
            features of our selection of shoes. On IsuiT - Italian Luxury, there
            is a wide range of dress shoes by the best Italian men’s designers
            like Santoni, Tom-Ford, Kiton, Zilli, Isaia and others. A wide
            choice among different patterns, colors and fabrics to wear the best
            of Italian shoes.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="dressshoes">
          {dressShoes?.map((val, idx) => {
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

export default DressShoes;
