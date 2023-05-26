import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Navbar = styled("nav")`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: black;
`
const Ul = styled("ul")`
  display: flex;
  align-items: center;
  gap: 1rem;
`
const Li = styled("li")`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`
const Search = styled("div")`
  display: flex;
  align-self: center;
  display: flex;
  gap: 1rem;
`
const Input = styled("input")`
  width: 15rem;
  height: 3rem;
  border: none;
  border-radius: 10px;
  background-color: #d7d3d3;
  color: white;
`
const Btn = styled("button")`
  height: 3rem;
  border: none;
  color: #787777;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  padding: 1rem;
  border-radius: 10%;
  background-color: #d7d3d3;
  :hover {
    background-color: #afafaf;
  }
`
const NavImg = styled("img")`
  width: 4rem;
  height: 3rem;
`
const Navigation = () => {
  return (
    <Navbar>
      <Ul>
        <Link to="/">
          <NavImg
            src="https://freepngimg.com/thumb/online_shopping/12-2-online-shopping-png-clipart.png"
            alt=""
          />
        </Link>
        <Li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </Li>
        <Li>
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </Li>
        <Li>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </Li>
      </Ul>
      <Search>
        <Input type="search" placeholder="search" />
        <Link to="/contact" className="btn-a">
          <Btn type="button" className="navbar-btn">
            Sign In
          </Btn>
        </Link>
      </Search>
    </Navbar>
  )
}

export default Navigation
