import Carousel, {CarouselItem} from "../Carousel/Carousel";
import Grid from "../Grid/Grid";
import Categories from "../../../utils/Categories";
import fBanners from "../../../utils/featuredBanners";

const HomePage = () => {
    return (
        <div className="home-content">
            <Carousel>
            {fBanners.results.map((banner) => {
                return (<CarouselItem key={banner.id}>{banner.data.main_image.url}</CarouselItem>);
            })}
            </Carousel>
            <Carousel>
            {Categories.results.map((category) => {
                return (<CarouselItem key={category.id}>{category.data.main_image.url}</CarouselItem>);
            })}
            </Carousel>
            <Grid />
        </div>
        
    )
}

export default HomePage;