import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="products">
      <div
        className="container products_child"
        style={{
          textAlign: "center",
          width: "100%",
          minHeight: "70vh",
          alignItems: "center",
          padding: "15px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul>
        <div>
          <h1>Products</h1>
        </div>
          <li>
            <Link to={"/createJeans"} style={{textDecoration: 'none', fontSize: '25px'}}>Jeans</Link>
          </li>
          <li>
            <Link to={"/createShirts"} style={{textDecoration: 'none', fontSize: '25px'}}>Shirts</Link>
          </li>
          <li>
            <Link to={"/createTShirts"} style={{textDecoration: 'none', fontSize: '25px'}}>T-Shirts</Link>
          </li>
          <li>
            <Link to={"/createSweaters"} style={{textDecoration: 'none', fontSize: '25px'}}>Sweaters</Link>
          </li>
          <li>
            <Link to={"/createBoots"} style={{textDecoration: 'none', fontSize: '25px'}}>Boots</Link>
          </li>
          <li>
            <Link to={"/createSneakers"} style={{textDecoration: 'none', fontSize: '25px'}}>Sneakers</Link>
          </li>
          <li>
            <Link to={"/createDressShoes"} style={{textDecoration: 'none', fontSize: '25px'}}>Dress Shoes</Link>
          </li>
          <li>
            <Link to={"/createHats"} style={{textDecoration: 'none', fontSize: '25px'}}>Hats</Link>
          </li>
          <li>
            <Link to={"/createSunglasses"} style={{textDecoration: 'none', fontSize: '25px'}}>Sunglasses</Link>
          </li>
          <li>
            <Link to={"/createBags"} style={{textDecoration: 'none', fontSize: '25px'}}>Bags</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Products;
