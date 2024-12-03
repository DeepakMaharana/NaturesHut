import React, { useRef, useEffect } from 'react';

import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";
import img4 from "./image/img4.jpg";
import "./slider.css";
const Slider = () => {

  const sliderRef = useRef(null);
  const sliderListRef = useRef(null);
  const thumbnailRef = useRef(null);

  const moveSlider = (direction) => {
    const sliderItems = sliderListRef.current.children;
    const thumbnailItems = thumbnailRef.current.children;

    if (direction === "next") {
      sliderListRef.current.appendChild(sliderItems[0]);
      thumbnailRef.current.appendChild(thumbnailItems[0]);
      sliderRef.current.classList.add("next");
    } else {
      sliderListRef.current.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailRef.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
      sliderRef.current.classList.add("prev");
    }

    const animationEndHandler = () => {
      if (direction === "next") {
        sliderRef.current.classList.remove("next");
      } else {
        sliderRef.current.classList.remove("prev");
      }
    };

    sliderRef.current.addEventListener("animationend", animationEndHandler, { once: true });

    // Clean up the event listener when the component unmounts
    return () => {
      sliderRef.current.removeEventListener("animationend", animationEndHandler);
    };
  };

  return (
    <div ref={sliderRef} className="slider">
      <div ref={sliderListRef} className="list">
        <div className="item">
          <img src={img2} alt="" />

          <div className="content">
            <div className="title">MAGIC SLIDER</div>
            <div className="type">FLOWER</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              temporibus quis eum consequuntur voluptate quae doloribus
              distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sequi, aut.
            </div>
            <div className="button">
              <button>SEE MORE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={img1} alt="" />

          <div className="content">
            <div className="title">MAGIC SLIDER</div>
            <div className="type">NATURE</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              temporibus quis eum consequuntur voluptate quae doloribus
              distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sequi, aut.
            </div>
            <div className="button">
              <button>SEE MORE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={img4} alt="" />

          <div className="content">
            <div className="title">MAGIC SLIDER</div>
            <div className="type">PLANT</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              temporibus quis eum consequuntur voluptate quae doloribus
              distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sequi, aut.
            </div>
            <div className="button">
              <button>SEE MORE</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={img3} alt="" />

          <div className="content">
            <div className="title">MAGIC SLIDER</div>
            <div className="type">NATURE</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              temporibus quis eum consequuntur voluptate quae doloribus
              distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sequi, aut.
            </div>
            <div className="button">
              <button>SEE MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div ref={thumbnailRef} className="thumbnail">

        <div className="item">
          <img src={img1} alt="" />
        </div>
        <div className="item">
          <img src={img4} alt="" />
        </div>
        <div className="item">
          <img src={img3} alt="" />
        </div>
        <div className="item">
          <img src={img2} alt="" />
        </div>
      </div>

      <div className="nextPrevArrows">
        <button className="prev" onClick={() => moveSlider("prev")}>
          {" "}
          {"<"}{" "}
        </button>
        <button className="next" onClick={() => moveSlider("next")}>
          {" "}
          {">"}{" "}
        </button>
      </div>
    </div>
  );
};

export default Slider;