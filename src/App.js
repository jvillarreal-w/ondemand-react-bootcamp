import "./App.css";
import "./components/Content/Grid/Grid.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Carousel, {CarouselItem} from "./components/Content/Carousel/Carousel";
import Grid from "./components/Content/Grid/Grid";
import Categories from "./utils/Categories";

//import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

function App() {
  //const { data, isLoading } = useFeaturedBanners();
  //console.log(data, isLoading);
  return (
    <div className="App">
      <Header/>
      <Carousel>
      {Categories.results.map((category) => {
        return (<CarouselItem key={category.id}>{category.data.main_image.url}</CarouselItem>);
      })}
      </Carousel>
      <Grid />
      <Footer/>
    </div>
  )
}

export default App;
