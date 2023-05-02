import React from "react"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <img
            src="https://freepngimg.com/thumb/online_shopping/12-2-online-shopping-png-clipart.png"
            alt=""
          />
        </Link>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
      </ul>
      <div className="btn-search">
        <input type="search" placeholder="search" />
        <Link to="/contact" className="btn-a">
          <button type="button" className="navbar-btn">
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
