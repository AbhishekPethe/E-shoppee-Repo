import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    
    <Wrapper>
      <h5>&copy; {new Date().getFullYear()}
        <span>  E-Shoppee</span>
      </h5>
      <h5>All rights @ <a href="https://abdev-myportfolio.netlify.app" target="_blank">AB.dev</a></h5>
      
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  gap : 2rem;
  span {
    color: #fff;
    margin-left: 5px;
    font-family: 'Caveat', cursive;
    font-size: larger;
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;

    a{
      color : white;
    }
  }


  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
