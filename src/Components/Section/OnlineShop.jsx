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
  width: 200px;
  height: auto;
  margin: 2rem;
  align-items: center;
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
            <img
              className="product-img"
              src="https://images.uzum.uz/cgk161r57mg9720ddg70/t_product_540_high.jpg#1682737191417"
            />
            <h3>{d.name}</h3>
            <p className="product-price">${d.price}</p>
          </Link>

          <button className="product-btn">
            <Link to="/addcard">Add to Cart</Link>
          </button>
        </InfoConatiner>
      ))}
    </Container>
  )
}

export default OnlineShop
