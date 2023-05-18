import React from 'react';
import styled from 'styled-components';


const FooterCss = styled("footer")`
  display: flex;
  justify-content: center;
  background-color: black;
  color: rgb(16, 116, 224);
`
function Footer() {
  return (
    <FooterCss>
      <p>Copyright © {new Date().getFullYear()}
        <span> Online Shop</span></p>
    </FooterCss>
  );
}

export default Footer;