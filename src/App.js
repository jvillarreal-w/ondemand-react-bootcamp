import "./App.css";
import "./components/Content/Grid/Grid.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Content/Home/HomePage";
import ProductList from "./components/Content/Products/ProductList";
import { useState } from "react";

function App() {
  let [productListToggle, setProductListToggle] = useState(true);

  const handleToggle = () => {
    return setProductListToggle(!productListToggle);
  }

  return (
    <div className="App">
      <Header/>
      {productListToggle ? <HomePage/> : <ProductList/>}
      <div>
        <button onClick={() => handleToggle()}>View all products</button>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
