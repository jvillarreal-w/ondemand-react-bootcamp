import GridItem from "./GridItem";
import Products from "../../../utils/Products";
import { v4 as uuidv4 } from "uuid";

const FilteredGrid = (props) => {
  const { filteredItems } = props;

  return (
    <table className="tabs">
      <tbody>
        <tr>
          <td className="contentCell">
            <div className="contentWrapper">
              {Products.results.map((product, index) => {
                if (filteredItems.includes(product.data.category.slug)) {
                  return (
                    <div className="row" key={uuidv4()}>
                      <GridItem
                        key={product.id}
                        name={product.data.name}
                        description={product.data.short_description}
                        image={product.data.mainimage.url}
                        price={product.data.price}
                      ></GridItem>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default FilteredGrid;
