import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Content/Slider/Slider";
import Carousel, {CarouselItem} from "./components/Content/Carousel/Carousel";
import Grid from "./components/Content/Grid/Grid";
import Categories from "./utils/Categories";
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
      <Slider/>
      <Carousel>
      {Categories.results.map((category) => {
        return (<CarouselItem key={category.id}>{category.data.main_image.url}</CarouselItem>);
      })}
      </Carousel>
      <Grid/>
      <Footer/>
    </div>
  )
}

export default App;
