import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../config"
import styled from "styled-components"

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
`
const InfoConatiner = styled("div")`
  display: flex;
  flex-direction: column;
  width: 13rem;
  height: 30rem;
  margin: 2rem;
  align-items: center;
`
const Price = styled("p")`
  display: flex;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`
const ShopImg = styled("img")`
  width: 13rem;
  height: 17rem;
  position: relative;
  overflow: hidden;
  border-radius: 10%;
  transition: all 0.3s;
  :hover{
    transform: scale(1.1);
  }
`
const ProductBtn = styled("button")`
  padding: 0.5rem;
  border-radius: 10px;
  background-color: black;
  border: none;
  color: rgb(16, 116, 224);
`
const OnlineShop = () => {
  const [product, setProduct] = useState([])
  const products = collection(db, "product")

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(products)
      setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getProducts()
  }, [])

  return (
    <Container>
      {product.map((d) => (
        <InfoConatiner>
          <Link to={`/product/${d.key}`}>
            <ShopImg src="https://images.uzum.uz/cgk161r57mg9720ddg70/t_product_540_high.jpg#1682737191417" />
            <h3>{d.name}</h3>
            <Price>${d.price}</Price>
          </Link>

          <Link to="/addcard">
            <ProductBtn className="product-btn">Add to Cart</ProductBtn>
          </Link>
        </InfoConatiner>
      ))}
    </Container>
  )
}

export default OnlineShop;
