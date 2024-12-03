import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { productData, responsive } from "../../utils/productData";
import Cards from "./Cards";

export default function CardSlider({ villaList, heading }) {
  const product = villaList.map((item) => (
    <Cards key={item.id} resData={item} />
  ));

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 5000,
          autoplaySpeed: 5000,
        },
      },
    ],
  };

  return (
    <div className="slider-container py-6 bg-white shadow-sm">
        <h1 className="text-center font-bold text-3xl sm:text-4xl  lg:text-5xl mb-4 text-[#614027] uppercase ">
          {heading}
        </h1>
        <Slider {...settings} className="px-4">
          {product}
        </Slider>
    </div>
  );
}
