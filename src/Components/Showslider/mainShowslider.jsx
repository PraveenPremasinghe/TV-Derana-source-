import React from "react";
import "./mainShowslider.css";
import ShowsCard from "../Show_Card/ShowsCard.jsx";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "../../images";
import LatestEpisodes from "../LatestEpisodes/LatestEpisodes.jsx";

function Showslider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image, index) => {
            return (
              <motion.div className="item" key={index}>
                {/* <img src={image} alt="" /> */}
                <ShowsCard
                  src={image.img}
                  name={image.name}
                  days={image.days}
                  time={image.time}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

function LatestEpisodesShowslider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image) => {
            return (
              <motion.div className="item1" key={image}>
                <LatestEpisodes />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export { Showslider, LatestEpisodesShowslider };
