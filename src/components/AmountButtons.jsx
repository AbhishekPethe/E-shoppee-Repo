import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({ amount, stock , increase , decrease }) => {
  
  // const Increase = (amount) => {
  //   if (amount >= stock) {
  //     return
  //   }
   
  //   setAmount(prev => prev + 1)
    
  // }

  // const Decrease = (amount) => {
  //   if (amount === 1) {
  //     return
  //   }
  
  //   setAmount(prev => prev - 1)
    
  // }

  return (
    <Wrapper>
      <button onClick={() => decrease(amount)}>
        <FaMinus className={`${amount===1 ? "btnOpacity" : null}`} />
      </button>
      <h2>
        {amount}
      </h2>
      <button onClick={()=>increase(amount)}>
        <FaPlus className={`${amount === stock ? "btnOpacity" : null}`} />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
  .btnOpacity{
    opacity: 0.3;
  }
`

export default AmountButtons
