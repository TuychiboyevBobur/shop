import React from "react"
import styled from "styled-components"

const Vaqt = setInterval(() => {
  const date = new Date()

  const hour = date.getHours()
  const minut = date.getMinutes()
  const second = date.getSeconds()

  const Data = styled("div")`
    display: flex;
  `
const H1 = styled("h1")``
  return(
    <Data>
        <h1>{hour}</h1>
        <h1>{minut}</h1>
        <h1>{second}</h1>
    </Data>
  )
}, 1)

export default Vaqt;
