import React, { useState } from "react";
import { Button} from "antd";
import { Image } from "antd";
import { useNavigate } from "react-router-dom";
import {LeftOutlined} from '@ant-design/icons';
import '../styles/category.css';

function Category({ category, getLists, setSize, size }) {
  const [count, setCount] = useState(1);

  const getCount = () => {
    if (count === 1) {
      void(0)
    } else {
      setCount(count - 1);
    }
  };

  const navigate = useNavigate()

  return (
    <div className="container">
      <LeftOutlined onClick={()=>navigate(-1)} id="back_btn" />
      <div className="col">
        {category?.map((val, idx) => {
          return (
            <div
              className="card mb-3 p-2 text-center"
              key={idx}
              style={{ cursor: "auto" }}
            >
              <div className="row g-0 align-items-center">
                <div className="col-5">
                  <Image.PreviewGroup>
                    <Image
                      id="img_category"
                      src={val.img}
                      style={{
                        width: "90%",
                        height: "80%",
                        alignItems: "center",
                      }}
                    />
                  </Image.PreviewGroup>
                </div>
                <div
                  className="col-md-7 align-items-center"
                  style={{ alignItems: "center" }}
                >
                  <div className="card-body" style={{ lineHeight: "25px" }}>
                    <h1 className="card-title">
                      <b>{val.title}</b>
                    </h1>
                    <h3 className="card-text">{val.desc}</h3>
                    <h5 className="card-text" style={{margin: '10px 0px'}}>
                      <b>${val.price}</b>
                    </h5>
                    <div>
                      {val.sizes ? (
                        <span style={{margin: '10px 0px'}}>
                          <h5>Size: <b>{size}</b></h5>
                          <Button style={{margin: '0px 5px'}} value={val.sizes[0]} onClick={(e)=>setSize(e.target.value)}>{val.sizes[0]}</Button>
                          <Button style={{margin: '0px 5px'}} value={val.sizes[1]} onClick={(e)=>setSize(e.target.value)}>{val.sizes[1]}</Button>
                          <Button style={{margin: '0px 5px'}} value={val.sizes[2]} onClick={(e)=>setSize(e.target.value)}>{val.sizes[2]}</Button>
                          <Button style={{margin: '0px 5px'}} value={val.sizes[3]} onClick={(e)=>setSize(e.target.value)}>{val.sizes[3]}</Button>
                          <Button style={{margin: '0px 5px'}} value={val.sizes[4]} onClick={(e)=>setSize(e.target.value)}>{val.sizes[4]}</Button>
                        </span>
                      ) : (
                        ''
                      )}
                    </div>
                    <br />
                    <Button
                      type="primary"
                      danger
                      onClick={() => {
                        getCount(count);
                      }}
                    >
                      -
                    </Button>
                    <span style={{ margin: "0px 20px", fontSize: "20px" }}>
                      {count}
                    </span>
                    <Button type="primary" onClick={() => setCount(count + 1)}>
                      +
                    </Button>
                  </div>
                  <button
                    style={{
                      borderRadius: "0px",
                      width: "100%",
                      fontSize: "18px",
                    }}
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      getLists({
                        id: val.id,
                        title: val.title,
                        price: val.price,
                        count: count,
                        img: val.img,
                        desc: val.desc,
                        sizes: size
                      });
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
