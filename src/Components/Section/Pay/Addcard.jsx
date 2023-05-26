import React from "react"
import styled from "styled-components"

const Sellcontainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  width: 25rem;
  height: 22rem;
  border-radius: 20px;
  background-color: #f2f2f2;
`

const Card = styled("input")`
  width: 23rem;
  border-radius: 5px;
`
const CardDate = styled("input")`
  border-radius: 5px;
`
const CardSvc = styled("input")`
  border-radius: 5px;
`
const LastName = styled("input")`
  border-radius: 5px;
`
const FirstName = styled("input")`
  border-radius: 5px;
`
const EmailInput = styled("input")`
  width: 23rem;
  border-radius: 5px;
`
const DateSvc = styled("div")`
  display: flex;
  gap: 2rem;
`
const Date = styled("div")``
const Svc = styled("div")``
const First = styled("div")``
const Last = styled("div")``
const H1 = styled("h1")``
const H4 = styled("h4")``
const Name = styled("div")`
  display: flex;
  gap: 2rem;
`
const Email = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  border-radius: 10px;
  height: 7rem;
  background-color: #f2f2f2;
  margin-bottom: 3rem;
`
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`
const Cardno = styled("div")``
const Emailcontainer = styled("div")``
const PayBtn = styled("button")`
  width: 25rem;
  padding: 0.5rem;
  background-color: rgb(16, 116, 224);
  border-radius: 10px;
  border: none;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1rem;
  color: white;
  cursor: pointer;
`
const AddCard = () => {
  return (
    <Container>
      <H1>Card info</H1>
      <Sellcontainer>
        <Cardno>
          <H4>Card No.</H4>
          <Card placeholder="Fill the blank" type="number" required></Card>
        </Cardno>
        <DateSvc>
          <Date>
            <H4>Expiration date</H4>
            <CardDate placeholder="MM/YY" type="number" required></CardDate>
          </Date>
          <Svc>
            <H4>Security Code</H4>
            <CardSvc placeholder="Fill the blank" required></CardSvc>
          </Svc>
        </DateSvc>
        <Name>
          <First>
            <H4>First Name</H4>
            <FirstName placeholder="First Name" required></FirstName>
          </First>
          <Last>
            <H4>Last Name</H4>
            <LastName placeholder="Last Name" required></LastName>
          </Last>
        </Name>
      </Sellcontainer>
      <Email>
        <Emailcontainer>
          <H4>E-mail</H4>
          <EmailInput
            placeholder="@gmail.com"
            type="email"
            required
          ></EmailInput>
        </Emailcontainer>
      </Email>
      <PayBtn>Buy</PayBtn>
    </Container>
  )
}

export default AddCard
