import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Shirts from "./pages/Shirts";
import Jeans from "./pages/Jeans";
import TShirt from "./pages/TShirt";
import Sweaters from "./pages/Sweaters";
import Boots from "./pages/Boots";
import Sneakers from "./pages/Sneakers";
import Category from "./components/Category";
import { useState } from "react";
import { FloatButton } from "antd";
import Cart from "./components/Cart";
import DressShoes from "./pages/DressShoes";
import Hats from "./pages/Hats";
import Sunglasses from "./pages/Sunglasses";
import Bags from "./pages/Bags";
import ModalCart from "./components/ModalCart";
import { message } from "antd";
import Login from "./adminComponent/Login";
import Products from "./adminComponent/Products";
import CreateJeans from "./adminComponent/CreateJeans";
import CreateShirt from "./adminComponent/CreateShirts";
import CreateTShirt from "./adminComponent/CreateTShirt";
import CreateSweaters from "./adminComponent/CreateSweaters";
import CreateBoots from "./adminComponent/CreateBoots";
import CreateSneakers from "./adminComponent/CreateSnakers";
import CreateDressShoes from "./adminComponent/CreateDressShoes";
import CreateHats from "./adminComponent/CreateHats";
import CreateSunglasses from "./adminComponent/CreateSunglasses";
import CreateBags from "./adminComponent/CreateBags";
import {
  UserOutlined,
  PhoneOutlined,
  InstagramOutlined,
  GithubOutlined,
  MessageOutlined,
} from "@ant-design/icons";

function App() {
  const [category, setCategory] = useState([]);
  const [cartLists, setCartLists] = useState([]);
  const [size, setSize] = useState([]);
  const [modal, setModal] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Added",
    });
  };

  const info = () => {
    messageApi.info("Enter the size!");
  };

  const getLists = (obj) => {
    if (obj.sizes.length) {
      success();
      let isExt = cartLists.some((s) => s.id === obj.id);
      if (isExt) {
        let newMass = cartLists.map((item) => {
          if (item.id === obj.id) {
            return {
              ...item,
              count: item.count + obj.count,
            };
          } else {
            return item;
          }
        });
        setCartLists(newMass);
      } else {
        setCartLists([...cartLists, obj]);
      }
    } else {
      info();
    }
  };

  const removeList = (id) => {
    let newMass = cartLists.filter((s) => s.id !== id);
    setCartLists(newMass);
  };

  return (
    <div>
      {contextHolder}
      {modal === true ? (
        <ModalCart
          setModal={setModal}
          cartLists={cartLists}
          removeList={removeList}
        />
      ) : null}
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#E6E6E6", fontFamily: "Mont" }}
      >
        <div className="container">
          <a
            className="navbar-brand text-center m-auto"
            href="/"
            style={{ fontSize: "28px", fontWeight: "600" }}
          >
            <span style={{ color: "#86754E" }}>I</span>SUI
            <span style={{ color: "#86754E" }}>T</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav mb-2 mb-lg-0"
              style={{ marginLeft: "10px" }}
            >
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontWeight: "400" }}
                >
                  CLOTHING
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/jeans"}>
                      Jeans
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/shirts"}>
                      Shirts
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/tshirt"}>
                      T-Shirt
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/sweaters"}>
                      Sweaters
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul
              className="navbar-nav mb-2 mb-lg-0"
              style={{ marginLeft: "10px" }}
            >
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontWeight: "400" }}
                >
                  SHOES
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/boots"}>
                      Boots
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/sneakers"}>
                      Sneakers
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/dressShoes"}>
                      Dress shoes
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul
              className="navbar-nav mb-2 me-auto mb-lg-0"
              style={{ marginLeft: "10px" }}
            >
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontWeight: "400" }}
                >
                  ACCESSORIES
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/hats"}>
                      Hats
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/sunglasses"}>
                      Sunglasses
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/bags"}>
                      Bags
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Cart setModal={setModal} modal={modal} />
            <Link to={"/login"}>
              <UserOutlined id="user_btn" />
            </Link>
          </div>
        </div>
      </nav>

      <div>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route
            path="/category"
            index
            element={
              <Category
                category={category}
                getLists={getLists}
                setSize={setSize}
                size={size}
              />
            }
          />
          <Route
            path="/jeans"
            index
            element={<Jeans setCategory={setCategory} />}
          />
          <Route
            path="/shirts"
            index
            element={<Shirts setCategory={setCategory} />}
          />
          <Route
            path="/tshirt"
            index
            element={<TShirt setCategory={setCategory} />}
          />
          <Route
            path="/sweaters"
            index
            element={<Sweaters setCategory={setCategory} />}
          />
          <Route
            path="/boots"
            index
            element={<Boots setCategory={setCategory} />}
          />
          <Route
            path="/sneakers"
            index
            element={<Sneakers setCategory={setCategory} />}
          />
          <Route
            path="/dressShoes"
            index
            element={<DressShoes setCategory={setCategory} />}
          />
          <Route
            path="/hats"
            index
            element={<Hats setCategory={setCategory} />}
          />
          <Route
            path="/sunglasses"
            index
            element={<Sunglasses setCategory={setCategory} />}
          />
          <Route
            path="/bags"
            index
            element={<Bags setCategory={setCategory} />}
          />
          <Route path="/login" index element={<Login />} />
          <Route path="/adminProducts" index element={<Products />} />
          <Route path="/createJeans" index element={<CreateJeans />} />
          <Route path="/createShirts" index element={<CreateShirt />} />
          <Route path="/createTShirts" index element={<CreateTShirt />} />
          <Route path="/createSweaters" index element={<CreateSweaters />} />
          <Route path="/createBoots" index element={<CreateBoots />} />
          <Route path="/createSneakers" index element={<CreateSneakers />} />
          <Route
            path="/createDressShoes"
            index
            element={<CreateDressShoes />}
          />
          <Route path="/createHats" index element={<CreateHats />} />
          <Route
            path="/createSunglasses"
            index
            element={<CreateSunglasses />}
          />
          <Route path="/createBags" index element={<CreateBags />} />
        </Routes>
      </div>

      <div
        style={{
          padding: 10,
        }}
      >
        <FloatButton.BackTop style={{ width: "60px", height: " 60px" }} />
      </div>

      <div className="footer">
        <div className="footer_child container">
          <div>
            <h4 style={{ color: "#fff", textAlign: "center" }}>
              CONTACT <br />{" "}
            </h4>
            <span style={{ color: "#fff" }}>
              <PhoneOutlined style={{ fontSize: "20px" }} />{" "}
              <span style={{ fontSize: "17px" }}>+99891 203 57 52</span>
            </span>
            <br />
            <GithubOutlined style={{ color: "#fff" }} />{" "}
            <span style={{ color: "#fff" }}>MuhammadAl1Dev</span>
            <br />
            <span style={{ color: "#fff" }}>
              @{" "}
              <span style={{ color: "#fff" }}>
                kahhorovmuhammadali1@gmail.com
              </span>
            </span>
            <br />
            <InstagramOutlined style={{ color: "#fff" }} />{" "}
            <span style={{ color: "#fff" }}>kahhorov_1</span>
            <br />
            <MessageOutlined style={{ color: "#fff" }} />{" "}
            <a
              href="https://t.me/muhammadali_kahhorov"
              target={"_blank"}
              style={{ textDecoration: "none", color: '#fff', cursor: 'pointer' }}
            >
              @muhammadali_kahhorov
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
