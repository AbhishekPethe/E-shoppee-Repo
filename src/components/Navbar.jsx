import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { RiMenu2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
import CartItem from './CartItem'
import Sidebar from './Sidebar'

const Nav = () => {

  const { openSidebar } = useProductsContext(); 

  return <NavContainer>
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/" className='logo' >
          <h2>E-Shoppee</h2>
        </Link>
        <button type="button" className='nav-toggle' onClick={() => openSidebar()}>
          <RiMenu2Line />
        </button>
      </div>
      <ul className="nav-links">
        {links.map((link) => {
          const { id, text, url } = link;

          return (
            <li key={id}>
              <Link to={url} >{text}</Link>
            </li>
          )
        })}
      </ul>
      <CartButtons />
      
   
    </div>
  </NavContainer>
}

const NavContainer = styled.nav`

  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      width: 175px;
      margin-left: -15px;
      /* font-family: 'Lobster', cursive; */
      font-family: 'Caveat', cursive;
    
  
    }
  }
  .logo{
    text-decoration: none;
    color : black ;
    font-size : 31px;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      list-style: none;
      
   
      li {
        margin: 0 0.5rem;
        
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        text-decoration: none;

        
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
