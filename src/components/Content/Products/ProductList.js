import "./ProductList.css";
import Categories from "../../../utils/Categories";
import FilteredGrid from "../Grid/FilteredGrid";

const ProductList = () => {
  return (
    <div className="productList">
      <div className="sidebar">
        {Categories.results.map((category) => {
          return (
            <div key={category.id}>
              <label>
                <input type="checkbox"></input>
                {category.data.name}
              </label>
            </div>
          );
        })}
      </div>
      <div className="productGrid">
        <FilteredGrid />
      </div>
    </div>
  );
};

export default ProductList;
