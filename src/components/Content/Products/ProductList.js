import "./ProductList.css";
import Categories from "../../../utils/Categories";
import FilteredGrid from "../Grid/FilteredGrid";
import { useState } from "react";
import Pagination from "../../Pagination/Pagination";

const ProductList = () => {
  let [filteredProducts, setFilteredProducts] = useState([]);

  const handleFilteredProducts = (event, newProduct) => {
    if(event.target.checked) {
      return setFilteredProducts([...filteredProducts, newProduct]);
    }
    else {
      return setFilteredProducts(filteredProducts.filter(product => product !== newProduct))
    }
  };

  return (
    <div className="productList">
      <div className="sidebar">
        {Categories.results.map((category) => {
          return (
            <div key={category.id}>
              <label>
                <input
                  type="checkbox"
                  onClick={(event) => handleFilteredProducts(event, category.data.name.toLowerCase())}
                ></input>
                {category.data.name}
              </label>
            </div>
          );
        })}
      </div>
      <div className="productGrid">
        <FilteredGrid filteredItems={filteredProducts} />
        <Pagination/>
      </div>
    </div>
  );
};

export default ProductList;
