import "./App.css";
import "./components/Content/Grid/Grid.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/Content/Home/HomePage";
import ProductList from "./components/Content/Products/ProductList";
import Loader from "./components/Content/Loader/Loader";
import { useState } from "react";

function App() {
  let [productListToggle, setProductListToggle] = useState(true);

  function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time)
  )
}

  const handleToggle = () => {
    document.querySelector(".App").classList.add('loading');
    sleep(2000).then(()=>{
      document.querySelector(".App").classList.remove('loading');
      return setProductListToggle(!productListToggle);
   })
    
  }

  const handleShowHomePage = () => {
    return setProductListToggle(true);
  }

  return (
    <div className="App">
      <Header showHomePage={handleShowHomePage}/>
      
      {productListToggle ? <HomePage/> : <ProductList/>}
      <div>
        <button onClick={() => handleToggle()}>View all products</button>
      </div>
      <Footer/>
      <Loader/>
    </div>
  )
}

export default App;
