import "./App.css";
import "./components/Content/Grid/Grid.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Carousel, {CarouselItem} from "./components/Content/Carousel/Carousel";
import Grid from "./components/Content/Grid/Grid";
import Categories from "./utils/Categories";
import Products from "./utils/Products";
//import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

function App() {
  //const { data, isLoading } = useFeaturedBanners();
  //console.log(data, isLoading);

  // const listResults = data.results.map((result) =>
  //   <CarouselItem>{result}</CarouselItem>
  // );

  // return [<Header />, <Slider />, <Carousel results={data.results} />, <Grid />, <Footer />];
  return (
    <div className="App">
      <Header/>
      <Carousel>
      {Categories.results.map((category) => {
        return (<CarouselItem key={category.id}>{category.data.main_image.url}</CarouselItem>);
      })}
      </Carousel>
      {Products.results.map((product, index) => {
        if (index % 4 === 3) {
          return (<div className="row">
            <Grid key={product.id} name={product.data.name} description={product.data.short_description} image={product.data.mainimage.url} price={product.data.price}></Grid>
          </div>)
        }
        return (<Grid key={product.id} name={product.data.name} description={product.data.short_description} image={product.data.mainimage.url} price={product.data.price}></Grid>);
      })}
      <Footer/>
    </div>
  )
}

export default App;
