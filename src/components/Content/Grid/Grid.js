import GridItem from "./GridItem";
import Products from "../../../utils/Products.js";

const Grid = (children) => {
  return (
    <table className="tabs">
      <tr>
        <td className="contentCell">
          <div className="contentWrapper">
            {Products.results.map((product, index) => {
              return (
                <div className="row">
                  <GridItem
                    key={product.id}
                    name={product.data.name}
                    description={product.data.short_description}
                    image={product.data.mainimage.url}
                    price={product.data.price}
                  ></GridItem>
                </div>
              );
            })}
          </div>
        </td>
      </tr>
    </table>

    // <div classNameName="products">
    //   {Products.results.map((product) => {
    //     return (
    //       <GridItem
    //         name={product.data.name}
    //         description={product.data.short_description}
    //         image={product.data.mainimage.url}
    //         price={product.data.price}
    //       ></GridItem>
    //     );
    //   })}
    // </div>
  );
};

export default Grid;
