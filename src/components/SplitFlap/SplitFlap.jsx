import React, { useEffect, useState } from "react";

// styles
import "./styles.css";

// utils
import * as Generator from "../../utils/Generator";

export default function SplitFlap() {
  const [characterFront, setCharacterFront] = useState("");
  const [characterBack, setCharacterBack] = useState("");
  const [transformation, setTransformation] = useState("");
  const [textColor, setTextColor] = useState("black");
  const [backgroundColor, setBackgroundColor] = useState("white");

  function setRandomCharacters() {
    const randomCharacterFront = Generator.getRandomCharacter();
    const randomCharacterBack = Generator.getRandomCharacter();

    setCharacterFront(randomCharacterFront);
    setCharacterBack(randomCharacterBack);
  }

  function setRandomColorCombination() {
    if (Math.random() < 0.5) {
      setTextColor("black");
      setBackgroundColor("white");
    } else {
      setTextColor("white");
      setBackgroundColor("black");
    }
  }

  useEffect(() => {
    let timeout = null;
    function flipFlap() {
      setRandomCharacters();
      setTransformation("rotateX(-180deg)");
      timeout = setTimeout(() => {
        setTransformation("rotateX(0deg)");
      }, Math.floor(500 * Math.random()));
    }

    const interval = setInterval(() => {
      setRandomColorCombination();
      flipFlap();
    }, Math.floor(2000 * Math.random()));

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div
        className="split-flap"
        style={{ color: textColor, backgroundColor: backgroundColor }}
      >
        <div
          className="split-flap__inner"
          style={{ transform: transformation }}
        >
          <div className="split-flap__face split-flap__face--front">
            {characterFront}
          </div>
          <div className="split-flap__face split-flap__face--back">
            {characterBack}
          </div>
        </div>
      </div>
    </>
  );
}
