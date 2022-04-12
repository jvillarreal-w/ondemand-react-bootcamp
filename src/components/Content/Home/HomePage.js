import Carousel, {CarouselItem} from "../Carousel/Carousel";
import Grid from "../Grid/Grid";
import Categories from "../../../utils/Categories";

const HomePage = () => {
    return (
        <div className="home-content">
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