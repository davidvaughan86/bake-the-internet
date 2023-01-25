import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Nav = () => {
  return (
    <div style={{ textAlign: "right" }} id="nav">
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="#bottom-of-page"
      >
        {" "}
        <ShoppingCartIcon
          style={{ textDecoration: "none", color: "white" }}
        />{" "}
        Order
      </a>
    </div>
  );
};

export default Nav;
