import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((each) => {
        return each.price;
      });

      maxPrice = Math.max(...maxPrice);

      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };

    case SET_GRIDVIEW:
      return { ...state, grid_view: true };

    case SET_LISTVIEW:
      return { ...state, grid_view: false };

    case UPDATE_SORT:
      return { ...state, sort: action.payload };

    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      let tempProducts = [...filtered_products];
      switch (sort) {
        case "price-lowest":
          tempProducts = tempProducts.sort((a, b) => a.price - b.price);
          break;

        case "price-highest":
          tempProducts = tempProducts.sort((a, b) => b.price - a.price);
          break;

        case "name-a":
          tempProducts = tempProducts.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          break;

        case "name-z":
          tempProducts = tempProducts.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          break;
      }
      return { ...state, filtered_products: tempProducts };

    case UPDATE_FILTERS:
      const { name, value } = action.payload;

      return { ...state, filters: { ...state.filters, [name]: value } };

    case FILTER_PRODUCTS:
      // console.log("Filtered");
      const { all_products } = state;
      const { text, category, company, color, price, shipping } = state.filters;

      let tempProducts1 = [...all_products]

      if (text) {
        tempProducts1 = tempProducts1.filter((each) => {
          return each.name.includes(text)
        })
      }

      if (category !== "all") {
        tempProducts1 = tempProducts1.filter((each) => {
          return category === each.category;
        })
      }

      if (company !== "all") {
        tempProducts1 = tempProducts1.filter((each) => {
          return each.company === company;
        })
      }

      if (color !== "all") {
        tempProducts1 = tempProducts1.filter((each) => {
          return each.colors.includes(color)
        })
      }

      
      tempProducts1 = tempProducts1.filter((each) => {
          return each.price <= price;
        })
      

      if (shipping) {
        tempProducts1 = tempProducts1.filter((each) => {
          return each.shipping === true;
        })
      }

      return { ...state  , filtered_products : tempProducts1 };

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.
          filters,
         
            text: "",
            company: "all",
            category: "all",
            color: "all",
            
            price: state.filters.max_price,
            shipping: false,
          
        },
      };

    // case FILTER_PRODUCTS:
    //   let newProducts = action.payload.filter((each) => {
    //     return each.category === "office"
    //   })
    //   console.log(newProducts);
    //   return { ...state, filtered_products: newProducts }

    // case CLEAR_FILTERS:
    //   return {...state , filtered_products : [...action.payload]}

    default:
      break;
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
