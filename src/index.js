import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Jeans from "./contexts/jeans";
import Shirts from "./contexts/shirts";
import TShirt from "./contexts/tshirt";
import Sweaters from "./contexts/sweaters";
import Boots from "./contexts/boots";
import Sneakers from "./contexts/sneaker";
import DressShoes from "./contexts/dressShoes";
import Hats from "./contexts/hats";
import Sunglasses from "./contexts/sunglasses";
import Bags from "./contexts/bags";
import Admin from "./contexts/admin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Jeans>
      <Shirts>
        <TShirt>
          <Sweaters>
            <Boots>
              <Sneakers>
                <DressShoes>
                  <Hats>
                    <Sunglasses>
                      <Bags>
                        <Admin>
                          <App />
                        </Admin>
                      </Bags>
                    </Sunglasses>
                  </Hats>
                </DressShoes>
              </Sneakers>
            </Boots>
          </Sweaters>
        </TShirt>
      </Shirts>
    </Jeans>
  </Router>
);
