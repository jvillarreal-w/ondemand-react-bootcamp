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
  );
};

export default GridItem;
