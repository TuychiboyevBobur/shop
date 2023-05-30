import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const FooterCss = styled("footer")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #171616;
  color: white;
`
const MySlef = styled("div")`
  display: flex;
  gap: 10rem;
`
const H2 = styled("h2")`
  font-size: 1rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`
const Mychanel = styled("div")`
  margin-top: 1rem;
`
const Ahref = styled("a")`
  color: #d7d3d3;
  text-decoration: none;
  list-style: none;
  :hover {
    color: #989797;
  }
`
const Instagram = styled("div")`
  display: flex;
  gap: 1rem;
`
const TikTok = styled("div")`
  display: flex;
  margin-left: -1.5rem;
  margin-top: -1rem;
`
const Telegram = styled("div")`
  display: flex;
  gap: 1rem;
`
const YouTube = styled("div")`
  display: flex;
  gap: 1rem;
`
const InstagramImg = styled("img")`
  width: 2.5rem;
  height: 2.5rem;
`
const TikTokImg = styled("img")`
  width: 5rem;
  height: 5rem;
`
const TelegramImg = styled("img")`
  width: 2.5rem;
  height: 2.5rem;
`
const YouTubeImg = styled("img")`
  width: 2.5rem;
  height: 2.5rem;
`
const Span = styled("span")`
  color: #007ee5;
`
function Footer() {
  return (
    <FooterCss>
      <MySlef>
        <H2>
          <Link to="/about" className="nav-link">
            <h4>Biz haqimizda</h4>
          </Link>
          <br />
          Mening Emailim: <Span>toychiboyevbobur16@gmail.com</Span> <br /><br />
          <br />
          <Span> Bobur</Span> tomonidan 2023-yil yasaldi. <br /><br /><br /> Mening
          telefon nomerim: <Span>+998 (99) 365 39 55</Span>
          <br />
        </H2>
        <Mychanel>
          <Instagram>
            <InstagramImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" />
            <Ahref
              href="https://instagram.com/yoldosh_toychiboyev"
              target="blank"
            >
              <h2>Instagram</h2>
            </Ahref>
          </Instagram>
          <Telegram>
            <TelegramImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" />
            <Ahref href="https://t.me/Accbobur" target="blank">
              <h2>Telegram</h2>
            </Ahref>
          </Telegram>
          <YouTube>
            <YouTubeImg src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" />
            <Ahref href="https://youtube.com/@mf_dragon_pubg" target="blank">
              <h2>You Tube</h2>
            </Ahref>
          </YouTube>
          <TikTok>
            <TikTokImg src="https://static.vecteezy.com/system/resources/previews/017/221/712/original/tiktok-icon-transparent-free-png.png" />
            <Ahref href="https://tiktok.com/mfdragon29" target="blank">
              <h2>Tik Tok</h2>
            </Ahref>
          </TikTok>
        </Mychanel>
      </MySlef>
      <p>
        Copyright <Span>Bobur</Span>'s © {new Date().getFullYear()}
        <span> Online Shop</span>
      </p>
    </FooterCss>
  )
}

export default Footer
