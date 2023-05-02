import React, { useState } from "react"
import styled from "styled-components";

function Example() {
    const Animation = styled("div")`
        display: flex;
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
          left: 200px;
        }
        50% {
          left: 200px;
        }
        75% {
          left: 200px;
        }
        100% {
          left: -800px;
        }
      }
    `
    return (
      <Animation>
        <AnimationImg
          src="https://images.uzum.uz/cf3rnigl08k0o9qhvk80/original.jpg"
          alt=""
        />
        <table class="text-white">
          <tr>
            <th>Size</th>
            <th>Capacity</th>
            <th>Bed</th>
            <th>Services</th>
          </tr>
          <tr>
            <td>:30ft</td>
            <td>:Max persion 5</td>
            <td>:King beds</td>
            <td>:Wifi, TV, Bathroom</td>
          </tr>
        </table>
      </Animation>
    )
}

export default Example;
