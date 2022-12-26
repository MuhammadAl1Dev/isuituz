import React from "react";
import { Image } from "antd";
import { Link } from "react-router-dom";
import { useSunglasses } from "../contexts/sunglasses";
import '../styles/sunglasses.css';

function Sunglasses({setCategory}) {
    const [sunglasses] = useSunglasses();

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          id="img_top_sngs"
          style={{ width: "100%", height: "360px", padding: "10px 20px" }}
          src="https://d1b7fmvx5bzyfc.cloudfront.net/wysiwyg/immagini-categorie/SUNGLASSES.jpg"
          alt="BEST DESIGNER SUNGLASSES"
        />
        <div id="img_t">
          <h2>BEST DESIGNER SUNGLASSES</h2>
          <p>
            Our luxury Italian sunglasses collection IS BACK. Here at IsuiT -
            Italian Luxury - we believe in one thing - Quality. There is nothing
            that comes second to it. We therefore aim to offer the best of all
            brands. We feel Zilli sunglasses are some of the best in the world -
            and we are proud to offer them here at the most competitive prices.
            Our other collection is the timeless Kiton - Who released a range of
            sunglasses in 2009 - Shop Kiton sunglasses also below.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="sunglasses">
          {sunglasses?.map((val, idx) => {
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

export default Sunglasses;
