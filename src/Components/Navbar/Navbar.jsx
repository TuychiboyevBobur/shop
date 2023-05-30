import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Navbar = styled("nav")`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #252323;
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
const Input = styled("input")`
  width: 15rem;
  height: 3rem;
  border: none;
  border-radius: 10px 0 0 10px;
  background-color: #d7d3d3;
  color: white;
  transition: 1s ease-in-out;
  :focus {
    width: 35rem;
  }
`
const SearchBtn = styled("button")`
  width: auto;
  height: 3.35rem;
  background-color: #d7d3d3;
  color: gray;
  border-radius: 0 10px 10px 0;
`
const Search = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
const Form = styled("form")`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Navigation = () => {
  const [value, setValue] = useState("")
  const onChange = (event) => {
    setValue(event.target.value)
  }
  const onSearch = (searchTerm) => {
    console.log("search ", searchTerm)
  }
  return (
    <Navbar>
      <Ul>
        <Link to="/">
          <NavImg
            src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/842730/shopping-cart-clipart-md.png"
            alt=""
          />
        </Link>
        <Li>
          <Link to="/" className="nav-link">
            Menu
          </Link>
        </Li>
        <Li>
          <Link to="/shop" className="nav-link">
            Do'kon
          </Link>
        </Li>
        <Li>
          <Link to="/about" className="nav-link">
            Biz haqimizda
          </Link>
        </Li>
      </Ul>
      <Search>
        <Form>
          <Input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Qidirish..."
          />
          <Link to="/">
            <SearchBtn onClick={() => onSearch(value)}>Qidirish</SearchBtn>
          </Link>
        </Form>
        <Link to="/contact" className="btn-a">
          <Btn type="button" className="navbar-btn">
            Kirish
          </Btn>
        </Link>
      </Search>
    </Navbar>
  )
}

export default Navigation
