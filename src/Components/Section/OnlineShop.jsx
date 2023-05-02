import React from "react"
import Product from "./Product"

const products = [
  {
    id: "1",
    name: "Smartfon vivo Y22, 4/64 GB",
    image:
      "https://images.uzum.uz/cf3rk4ivtie1lhbh1620/t_product_540_high.jpg#1682736211056",
    price: 200,
  },
  {
    id: "2",
    name: "Yopishmaydigan qoplamali blinchiklar uchun tova",
    image:
      "https://images.uzum.uz/cgt86lvg49devoae13j0/t_product_540_high.jpg#1682736639312",
    price: 1.2,
  },
  {
    id: "3",
    name: "Aqlli soat Smart Watch WS68 Ultra",
    image:
      "https://images.uzum.uz/cgk161r57mg9720ddg70/t_product_540_high.jpg#1682737191417",
    price: 26.99,
  },
  {
    id: "1",
    name: "Smartfon vivo Y22, 4/64 GB",
    image:
      "https://images.uzum.uz/cf3rk4ivtie1lhbh1620/t_product_540_high.jpg#1682736211056",
    price: 200,
  },
  {
    id: "2",
    name: "Yopishmaydigan qoplamali blinchiklar uchun tova",
    image:
      "https://images.uzum.uz/cgt86lvg49devoae13j0/t_product_540_high.jpg#1682736639312",
    price: 1.2,
  },
  {
    id: "3",
    name: "Aqlli soat Smart Watch WS68 Ultra",
    image:
      "https://images.uzum.uz/cgk161r57mg9720ddg70/t_product_540_high.jpg#1682737191417",
    price: 26.99,
  },
  {
    id: "1",
    name: "Smartfon vivo Y22, 4/64 GB",
    image:
      "https://images.uzum.uz/cf3rk4ivtie1lhbh1620/t_product_540_high.jpg#1682736211056",
    price: 200,
  },
  {
    id: "2",
    name: "Yopishmaydigan qoplamali blinchiklar uchun tova",
    image:
      "https://images.uzum.uz/cgt86lvg49devoae13j0/t_product_540_high.jpg#1682736639312",
    price: 1.2,
  },
  {
    id: "3",
    name: "Aqlli soat Smart Watch WS68 Ultra",
    image:
      "https://images.uzum.uz/cgk161r57mg9720ddg70/t_product_540_high.jpg#1682737191417",
    price: 26.99,
  },
  {
    id: "1",
    name: "Smartfon vivo Y22, 4/64 GB",
    image:
      "https://images.uzum.uz/cf3rk4ivtie1lhbh1620/t_product_540_high.jpg#1682736211056",
    price: 200,
  },
  {
    id: "2",
    name: "Yopishmaydigan qoplamali blinchiklar uchun tova",
    image:
      "https://images.uzum.uz/cgt86lvg49devoae13j0/t_product_540_high.jpg#1682736639312",
    price: 1.2,
  },
  {
    id: "3",
    name: "Aqlli soat Smart Watch WS68 Ultra",
    image:
      "https://images.uzum.uz/cgk161r57mg9720ddg70/t_product_540_high.jpg#1682737191417",
    price: 26.99,
  },
  {
    id: "1",
    name: "Smartfon vivo Y22, 4/64 GB",
    image:
      "https://images.uzum.uz/cf3rk4ivtie1lhbh1620/t_product_540_high.jpg#1682736211056",
    price: 200,
  },
  {
    id: "2",
    name: "Yopishmaydigan qoplamali blinchiklar uchun tova",
    image:
      "https://images.uzum.uz/cgt86lvg49devoae13j0/t_product_540_high.jpg#1682736639312",
    price: 1.2,
  },
  {
    id: "3",
    name: "Aqlli soat Smart Watch WS68 Ultra",
    image:
      "https://images.uzum.uz/cgk161r57mg9720ddg70/t_product_540_high.jpg#1682737191417",
    price: 26.99,
  },
  {
    id: "1",
    name: "Smartfon vivo Y22, 4/64 GB",
    image:
      "https://images.uzum.uz/cf3rk4ivtie1lhbh1620/t_product_540_high.jpg#1682736211056",
    price: 200,
  },
  {
    id: "2",
    name: "Yopishmaydigan qoplamali blinchiklar uchun tova",
    image:
      "https://images.uzum.uz/cgt86lvg49devoae13j0/t_product_540_high.jpg#1682736639312",
    price: 1.2,
  },
  {
    id: "3",
    name: "Aqlli soat Smart Watch WS68 Ultra",
    image:
      "https://images.uzum.uz/cgk161r57mg9720ddg70/t_product_540_high.jpg#1682737191417",
    price: 26.99,
  },
  {
    id: "1",
    name: "Smartfon vivo Y22, 4/64 GB",
    image:
      "https://images.uzum.uz/cf3rk4ivtie1lhbh1620/t_product_540_high.jpg#1682736211056",
    price: 200,
  },
  {
    id: "2",
    name: "Yopishmaydigan qoplamali blinchiklar uchun tova",
    image:
      "https://images.uzum.uz/cgt86lvg49devoae13j0/t_product_540_high.jpg#1682736639312",
    price: 1.2,
  },
  {
    id: "3",
    name: "Aqlli soat Smart Watch WS68 Ultra",
    image:
      "https://images.uzum.uz/cgk161r57mg9720ddg70/t_product_540_high.jpg#1682737191417",
    price: 26.99,
  },
]

const OnlineShop = () => {
  return (
    <div className="online-shop">
      <h2>Online Shop</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}

export default OnlineShop
