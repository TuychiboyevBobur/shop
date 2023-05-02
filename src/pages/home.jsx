import React, { useState } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";

function Example() {
    const Animation = styled("div")`
        display: flex;
        justify-content: space-evenly;
        background-color: #e2dcdc;
    `
    const AnimationImg = styled("img")`
      width: 400px;
      height: 600px;
      border-radius: 10px 100px 10px 10px;
      position: relative;
      animation-name: hotl-img;
      animation-iteration-count: infinite;
      animation-duration: 10s;
      @keyframes hotl-img {
        0% {
          left: 1600px;
        }
        25% {
          left: 50px;
        }
        50% {
          left: 50px;
        }
        75% {
          left: 50px;
        }
        100% {
          left: -800px;
        }
      }
    `
    const Tabletext = styled("table")`
      display: flex;
      font-size: 30px;
      margin-top: 150px;
      position: relative;
      animation-name: hotl-text;
      animation-iteration-count: infinite;
      animation-duration: 10s;

      @keyframes hotl-text {
        0% {
          opacity: 0%;
        }
        15% {
          opacity: 0%;
        }
        25% {
          opacity: 100%;
        }
        50% {
          opacity: 100%;
        }
        75% {
          opacity: 90%;
        }
        100% {
          opacity: 0%;
        }
      }
    `
    const Tr = styled("tr")`
      display: flex;
      flex-direction: column;
    `
    const Th = styled("th")`
      display: flex;
    `
    const Td = styled("td")`
      display: flex;
    `
    const Textbtn = styled("button")`
      background-color: black;
      color: rgb(0, 210, 0);
      cursor: pointer;
      margin-top: 2rem;
      border: none;
      width: 10rem;
      height: 2rem;
      border-radius: 5px;
    `
    return (
      <Animation>
        <AnimationImg
          src="https://images.uzum.uz/cf3rnigl08k0o9qhvk80/original.jpg"
          alt=""
        />
        <Tabletext class="text-white">
          <Tr>
            <Th>Name</Th>
            <Th>Display</Th>
            <Th>Memory</Th>
            <Th>Ram</Th>
            <Link to="/shop"><Textbtn>Buy</Textbtn></Link>
          </Tr>
          <Tr>
            <Td>:Smartfon vivo Y35</Td>
            <Td>:6,58 dyuym (2408x1080), Full HD, IPS</Td>
            <Td>:128 GB</Td>
            <Td>:4 GB</Td>
          </Tr>
        </Tabletext>
      </Animation>
    )
}

export default Example;
