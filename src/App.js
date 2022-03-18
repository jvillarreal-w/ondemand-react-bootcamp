import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return [<Header />, <Footer />];
}

export default App;
