import React from 'react'
import styled from 'styled-components'
import O from "../assets/o2.png"
import { Link } from 'react-router-dom'
import {HiOutlineArrowRight} from "react-icons/hi"
const ErrorPage = () => {
  return (
    <Wrapper className='page-100'>
      <section className='page404'>
        
      <span>4</span>
      <img src={O} alt="error-img" />
      <span>4</span>
      </section>

      <h3>Page Not Found</h3>

      <button className='btnn'> <Link to="/">HOME PAGE </Link> <HiOutlineArrowRight /></button>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  .page404{
    display: flex;
    justify-content: center;
    align-items: center;

    span{
      font-size: 15rem;
      margin-bottom: 3rem;
      font-weight: 700;
      color : black
    }

  }
  .btnn{
    background-color: transparent;
    height: 3rem;
    width: fit-content;
    font-size : 20px;
    border-radius: 7px;
    margin: 3rem;
    transition: all ease 0.7s;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
      color : black;
      margin : 1rem
    }
    svg{
      margin-right: 1rem;
      font-size: 1.5rem;
    }

  }

  .btnn:hover{
    a{
      color : #fff;
    }
    svg{
      color : #fff;
      transform: translateX(0.8rem);
      transition: all ease 0.5s;
    }
    background-color: black;
  }
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  img{
    height: 420px;
    width: 400px;
  }

  @media screen and (max-width : 500px){
    .page404{
      span{
        font-size: 10rem;
      }
    }
    img{
    height: 200px;
    width: 200px;
  }
  }

  @media screen and (max-width : 360px){
    .page404{
      span{
        font-size: 8rem;
      }
    }
    img{
    height: 150px;
    width: 150px;
  }
  }

`

export default ErrorPage
