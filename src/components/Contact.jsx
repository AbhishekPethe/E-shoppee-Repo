import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm, ValidationError } from '@formspree/react';
import {IoIosCheckmarkCircle} from "react-icons/io"


const Contact = () => {
  const [state, handleSubmit] = useForm("xknayeno");

  const [done , setDone] = useState(false)

  const handleOk = (e) => {
    e.preventDefault();
    setDone(true)
    setTimeout(() => {
      setDone(false)
    } , 3000)
  }
  
 
  return <Wrapper>  
    <div className="section-center">
      <h3>Join our Newsletter to get more offers !</h3>
      <div className="content">
        <p>

      Stay in the loop with our newsletter.
Get exclusive deals, product updates, and more delivered straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="email" name="email" className="form-input"
            placeholder='Type Email'  />
           <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          <button type='submit' className='submit-btn' disabled={state.submitting} onClick={handleOk} >Subscribe</button>
          {done && <h5 className='sent'>Your Email Successfully Added<IoIosCheckmarkCircle /></h5> }
        </form> 
        
      </div>
    </div>
  </Wrapper>
  
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .sent{
    margin-top: 1rem;
    color : rgb(67, 234, 67);
    width : fit-content;
    padding-left: 15px;
    border : 1px solid rgb(67, 234, 67);

    
}
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }

  @media screen and (max-width : 400px){
    .contact-form{
      display: flex;
      flex-direction: column;
    }
    .form-input {
    border-right: 2px solid black;
    margin-bottom: 1rem;
   
  }
  }
`

export default Contact
