import React from "react";
import "../styles/modalCart.css";
import "animate.css";
import { CloseSquareOutlined, DeleteOutlined } from "@ant-design/icons";
import { message } from 'antd';

function ModalCart({ setModal, cartLists, removeList }) {
  const [messageApi, contextHolder] = message.useMessage();

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Deleted',
    });
  };
  return (
    <div className="modal_cart" onClick={() => setModal(false)}>
      {contextHolder}
      <div
        className="modal_child animate__animated animate__fadeInRight"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseSquareOutlined
          id="close_btn"
          style={{ color: "red", fontSize: "30px" }}
          onClick={() => setModal(false)}
        />
        {cartLists.length ? (
          cartLists.map((val, idx) => {
            return (
              <div
                className="card mb-3 p-2 text-center"
                key={idx}
                style={{ cursor: "auto" }}
              >
                <div className="row g-0 align-items-center">
                  <div className="col-5">
                    <img
                      id="img_modal"
                      src={val.img}
                      style={{
                        width: "90%",
                        height: "80%",
                        alignItems: "center",
                      }}
                      className="img"
                      alt="..."
                    />
                  </div>
                  <div
                    className="col-md-6 align-items-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className="card-body">
                      <h1 className="card-title">{val.title}</h1>
                      <h4 className="card-text">{val.desc}</h4>
                      <h5>Size: <b>{val.sizes}</b></h5>
                      <h4>X{val.count}</h4>
                      <h5 className="card-text">
                        Total: ${val.price * val.count}
                      </h5>
                    </div>
                    <DeleteOutlined id="delete_bnt" onClick={()=>{ 
                      error()
                      removeList(val.id)
                      }} />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{textAlign: 'center', alignItems: 'center',display: 'flex', justifyContent: 'center', height: '90vh', color: '#86754E'}}>
            <h3>You have no items in your cart.</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalCart;
