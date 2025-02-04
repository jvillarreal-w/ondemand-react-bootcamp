import React, {useState, useEffect} from "react";
import "./Carousel.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <img src={children} alt="carouselImage"></img>
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if(newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if(!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 4000);

    return () => {
      if(interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
      <button onClick={() => {
        updateIndex(activeIndex - 1);
      }}>
        Prev
      </button>
      {React.Children.map(children, (child, index) => {
        return (
          <button className={`${index === activeIndex ? "active" : ""}`} onClick={() => {
            updateIndex(index);
          }}>
            {index + 1}
          </button>
        );
      })}
      <button onClick={() => {
        updateIndex(activeIndex + 1);
      }}>
        Next
      </button>
    </div>
    </div>
  );
};

/* <div>
    {console.log(props.results)}
    {props.results.map(result => <div>{result.data.main_image.url}</div>)}
</div> */

export default Carousel;
