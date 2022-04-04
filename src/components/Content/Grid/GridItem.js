import "./Grid.css";

const GridItem = (children) => {
  return (
    <div className="gridColumn">
        <div className="card">
            <h3>{children.name}</h3>
            <img className="productImage" src={children.image} alt={children.name}></img>
            <p>{children.description}</p>
            <p>${children.price}</p>
            <button>Añadir al carrito</button>
        </div>
    </div>
    // <div className="card">
    //   <div className="card-header">{item.name}</div>
    //   <div className="card-body">
    //     <img src={item.image} alt={item.name}></img>
    //     <p>{item.description}</p>
    //     <p>{item.price}</p>
    //   </div>
    // </div>
  );
};

export default GridItem;
