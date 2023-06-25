import React, { useEffect, useState } from 'react'
import { HiArrowLeft} from "react-icons/hi"
import {AiFillStar} from "react-icons/ai"
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {  

  const [count, setCount] = useState(4)
  
  

  const { id } = useParams();
  const navigate = useNavigate();
  
  const { single_product_loading: loading, single_product_error: error, single_product: product, fetchSingleProduct , demo } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])

  useEffect(() => {
    if (error) {
      
      setTimeout(() => {
      navigate("/")
     } , 5000)
    }
  } , [error])

  if (loading) {
    return <Loading />
  }

  if (error) {

    {
      count > 0 && setTimeout(() => {
        setCount(count - 1)
        console.log(count);
    } , 1000)}

    return (
    <>
    <Error />
    <h2 style={{textAlign:"center", marginBottom : "2rem"}}>Redirecting back to Homepage in {count} seconds</h2>
    </>
    )
  }
  
  // console.log(`${url}${id}`)


  const { name, price, description, stock, stars, reviews, id: sku, company, images , colors} = product
  
  // console.log("s", name);

  return (
    <Wrapper>
      <PageHero title={name} product={name} />
      <div className="section section-center page">
        <div className='svgCenter'>
        <HiArrowLeft/>
        <Link to="/products" style={{marginLeft : "0.7rem"}}>Back to Products</Link>
        </div>

        <div className="product-center">
          <ProductImages images={ images } />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">
              {formatPrice(price)}
            </h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? <span style={{color : "hsl(109.88235294117646, 100%, 50%)", fontWeight : "900" }}>
              In Stock
              </span> : <span style={{color : "red" , fontWeight : "900"}}>
              Out of Stock
              </span> }
            </p>
            <p className='info'>
              <span>Brand : </span>
              { company }
            </p>
            {
              
            }
           

            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>

      </div>
   </Wrapper>
  )


}

const Wrapper = styled.main`
  .svgCenter{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color:  #6309ff;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
