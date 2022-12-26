import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../contexts/admin";
import "../styles/login.css";
import { message } from "antd";

function Login() {
  // hooks
  const [admin, setAdmin] = useAdmin();
  // state
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();

  const info = () => {
    messageApi.info("Compelete the list!");
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Login",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Password or Name error!",
    });
  };

  const getLogin = (e) => {
    e.preventDefault();
    if (name && password) {
      if (admin[0].password === password) {
        navigate("/adminProducts");
        success()
      } else {
        error()
      }
    } else {
      info();
    }
  };

  return (
    <div className="login">
      {contextHolder}
        <h3 style={{textAlign: 'center', paddingTop: '20px'}}>Admin Login</h3>
      <div className="login_child container">
        <form onSubmit={getLogin} id="from_cd">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            style={{ borderRadius: "0px", width: "350px" }}
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="form-control"
            style={{ borderRadius: "0px", width: "350px" }}
          />
          <br />
          <button
            onClick={getLogin}
            className="btn btn-outline-secondary"
            style={{ borderRadius: "0px", width: "350px" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
