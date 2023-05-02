import React from "react"
import { Link } from "react-router-dom"
import OnlineShop from "../Section/OnlineShop"

const Navigation = () => {
  return (
    <nav>
      <ul>
        <img
          src="https://freepngimg.com/thumb/online_shopping/12-2-online-shopping-png-clipart.png"
          alt=""
        />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      <div className="btn-search">
        <input type="search" placeholder="search" />
        <button type="button" className="navbar-btn">
          <Link to="/contact" className="btn-a">
            Sign In
          </Link>
        </button>
      </div>
    </nav>
  )
}

export default Navigation
