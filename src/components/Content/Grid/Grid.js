import GridItem from "./GridItem";

const Grid = (children) => {
  return (
    <GridItem name={children.name} description={children.description} image={children.image} price={children.price}/>
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
