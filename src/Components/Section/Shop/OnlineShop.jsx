import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../config"
import styled from "styled-components"

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem;
`
const InfoConatiner = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 13rem;
  height: 32.3rem;
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
  :hover {
    transform: scale(1.1);
  }
`
const ProductBtn = styled("button")`
  padding: 0.5rem;
  border-radius: 10px;
  background-color: #d7d3d3;
  border: none;
  color: #000000;
  width: 13rem;
  :hover {
    background-color: #919191;
  }
`
const ShopImg2 = styled("img")`
  margin-top: 2rem;
  border-radius: 2rem;
  width: 90%;
  height: auto;
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
      <ShopImg2 src="https://images.uzum.uz/chljbrbltlh4bk4k2vdg/main_page_banner.jpg" />
      {product.map((d) => (
        <InfoConatiner>
          <Link to={`/product/${d.key}`} className="shop-text">
            <ShopImg src={d.image} />
            <h3>{d.name}</h3>
            <Price>${d.price}</Price>
          </Link>

          <Link to="/addcard">
            <ProductBtn className="product-btn">
              <h4>Savatchaga qo'shish</h4>
            </ProductBtn>
          </Link>
        </InfoConatiner>
      ))}
    </Container>
  )
}

export default OnlineShop
