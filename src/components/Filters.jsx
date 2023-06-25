import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";
import { FILTER_PRODUCTS } from "../actions";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products
  } = useFilterContext();


  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products , 'company')
  const colors = getUniqueValues(all_products , 'colors')

  // console.log(categories);
  // console.log(companies);
  // console.log(colors);

  return <Wrapper>
    <div className="content">
      <form onSubmit={(e)=>e.preventDefault()}>
        {/* Search Input  */}
        <input type="text" name="text"
          placeholder="Search"
          className="search-input"
          value={text}
          onChange={updateFilters}
        />
        {/*End of Search Input  */}
        
        {/* Categories  */}
        <div className="form-control">
          <h5>Category</h5>
          <div>
            {categories.map((each , index) => {
              return <button key={index}
                onClick={updateFilters}
                type="button"
                name="category"
                
                className={`${
                  category === each.toLowerCase() ? 'active' : null
                }`}
              >
                {each}
              </button>
            })}
          </div>
        </div>

        {/* End of Categories  */}

        
        {/* Companies  */}
        <div className="form-control"> 
            <h5>Companies</h5>
        <select
          name="company"
          value={company}
            onChange={updateFilters}
            className="company"
          >
          {companies.map((each , index) => {
            return (
              <option value={each} key={index}>
                {each}
              </option>
              )
            })}
        </select>
        
        </div>
        {/* End of Companies  */}


        {/* Colors  */}
        <div className="form-control">
          <h5>Colors</h5>
          <div className="colors">

            {colors.map((each, index) => {
              if (each === "all") {
                return <button type="button" name="color" onClick={updateFilters} data-color="all" className={`${color === "all" ? "all-btn active" : "all-btn"}`}>{each}</button>
            }
            return (
              <button type="button" style={{ backgroundColor: each }} className={`${color === each ? "color-btn active" : "color-btn"}`}
              data-color = {each}
                name="color"
              onClick={updateFilters}
                key={index}>
                
                {color === each ? <FaCheck /> : null}
                </button>
              )
            })}
              
            </div>
        </div>
        {/* End of Colors */}

        
        {/* PRICE */}

        <div className="form-control">
          <h5>Price</h5>
          <p className="price">{formatPrice(price)}</p>
          <div>
            <input type="range" name="price" min={min_price} max={max_price} value={price} onChange={updateFilters} />
          </div>
        </div>

        {/* END OF  PRICE  */}

        {/* Shipping  */}

        <div className="form-control shipping">
          
          <label htmlFor="checkbox">Free Shipping</label>
            <input type="checkbox"
              checked={shipping}
              onChange={updateFilters}
            name="shipping"
            id="checkbox"
            />
          
        </div>

        {/* End of Shipping  */}

        
      </form>

      <button type="button" className="clear-btn" onClick={clearFilters}>
        Clear Filters
      </button>

    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    margin-bottom: 1rem;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
    transform: scale(1.1);
    font-weight : 700;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
