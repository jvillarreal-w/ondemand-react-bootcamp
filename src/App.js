import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Content/Slider/Slider";
import Carousel, {CarouselItem} from "./components/Content/Carousel/Carousel";
import Grid from "./components/Content/Grid/Grid";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  // return [<Header />, <Slider />, <Carousel results={data.results} />, <Grid />, <Footer />];
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
      <Grid/>
      <Footer/>
    </div>
  )
}

export default App;
