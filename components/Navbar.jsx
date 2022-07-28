import React from "react";
import Link from "next/link";
import { GiShoppingCart } from "react-icons/gi";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1 className="logo">Jena's Decadent Fudge</h1>
          </div>
          <div className="col-sm">
            <nav className="navbar">
              {/* <div>Menu</div> */}
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm">
            <button
              type="button"
              className="cart-icon"
              onClick={() => setShowCart(true)}
            >
              <GiShoppingCart />
              <span className="cart-item-qty">{totalQuantities}</span>
            </button>

            {showCart && <Cart />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
