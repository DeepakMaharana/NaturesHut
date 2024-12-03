import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { productData, responsive } from "../../utils/productData";
import LocationCard from "./LocationCard";
import "../../css/slider_card.css"
import { locationList } from "../../utils/mockData";

export default function LocationSlider({heading}) {
  const product = locationList.map((item,  index) => (

    <LocationCard 
      key={index}
      name={item.locationName}
      url={item.locationImageUrl}
    />
  ));

  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div className="slider-container py-6">
      <div className="container">
        <h1 className="text-center font-bold text-3xl sm:text-4xl  lg:text-5xl mb-4 text-[#614027] uppercase">{heading}</h1>
        <p className="text-lg sm:text-xl text-center font-bold text-[#DFA878] mb-4">Explore the charm of India—affordable villas in top locations for your perfect budget-friendly getaway!</p>
        <Slider {...settings}>
          {product}
        </Slider>
      </div>
    </div>
  );
}
