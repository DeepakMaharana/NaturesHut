import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { productData, responsive } from "../../utils/productData";
import SpecCards from "./SpecCard";

export default function CardSpecSlider({villaList, heading}) {
  const product = villaList.map((item) => (
    <SpecCards
      key={item.id}
      resData={item}
    />
  ));

  const settings = {
    arrows:false,
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 5000,
          autoplaySpeed: 5000,
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      {/* <h1 className="text-center font-bold text-4xl mb-4 text-[#614027] uppercase ">{heading}</h1> */}
      <h3 className="text-2xl font-semibold mb-4 border-b-2 pb-1 border-[#795436]">{heading}</h3>
      <Slider {...settings}>
        {product}
      </Slider>
    </div>
  );
}
