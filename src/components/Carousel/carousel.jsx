import React, { useState } from "react";
import "./carousel.scss";
import { images } from "../helpers/carousel -exports.jsx";
import { moreImages } from '../helpers/carousel-exports-two';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function CarouselTwo(props) {
  const [currImg, setCurrImg] = useState(0);

  if (props.style === 'home') {

    return (
      <div className="carousel-home">
        <div
          className="carouselInner"
          style={{ backgroundImage: `url(${images[currImg].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: 30 }} />
          </div>
          <div className="center">

          </div>
          <div
            className="right"
            onClick={() => {
              currImg < images.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            <ArrowForwardIosIcon style={{ fontSize: 30 }} />
          </div>
        </div>
      </div>
    );
  } else {

    return (
      <div className="carousel">
        <div
          className="carouselInner"
          style={{ backgroundImage: `url(${moreImages[currImg].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: 30 }} />
          </div>
          <div className="center">

          </div>
          <div
            className="right"
            onClick={() => {
              currImg < images.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            <ArrowForwardIosIcon style={{ fontSize: 30 }} />
          </div>
        </div>
      </div>

    )
  }
}

export default CarouselTwo;