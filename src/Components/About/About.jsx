import React from "react"
import styled from "styled-components"
import Map from "./Map"

const Container = styled("div")`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  margin-top: 5rem;
`

const LeftContent = styled("div")`
margin-top: -6rem;
  width: 48%;
`
function About() {
  return (
    <Container className="about">
      <LeftContent>
        <h1>About us</h1>
        <p>
          Online shopping is a form of electronic commerce which allows
          consumers to directly buy goods or services from a seller over the
          Internet using a web browser or a mobile app. <br /> Consumers find a
          product of interest by visiting the website of the retailer directly
          or by searching among alternative vendors using a shopping search
          engine, which displays the same product's availability and pricing at
          different e-retailers. <br /> As of 2020, customers can shop online
          using a range of different computers and devices, including desktop
          computers, laptops, tablet computers and smartphones. <br /> An online
          shop evokes the physical analogy of buying products or services at a
          regular "bricks-and-mortar" retailer or shopping center; the process
          is called business-to-consumer (B2C) online shopping. <br /> When an
          online store is set up to enable businesses to buy from another
          businesses, the process is called business-to-business (B2B) online
          shopping. <br /> A typical online store enables the customer to browse
          the firm's range of products and services, view photos or images of
          the products, along with information about the product specifications,
          features and prices. Online stores usually enable shoppers to use
          "search" features to find specific models, brands or items. <br />{" "}
          Online customers must have access to the Internet and a valid method
          of payment in order to complete a transaction, such as a credit card,
          an Interac-enabled debit card, or a service such as PayPal. For
          physical products (e.g., paperback books or clothes), the e-tailer
          ships the products to the customer; for digital products, such as
          digital audio files of songs or software, the e-tailer usually sends
          the file to the customer over the Internet. <br /> The largest of
          these online retailing corporations are Alibaba, Amazon.com, and eBay.
        </p>
      </LeftContent>
        <Map />
    </Container>
  )
}

export default About
