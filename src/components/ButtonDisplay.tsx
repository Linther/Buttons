
import StackGrid from "react-stack-grid";
import ButtonImageSource from '../resources/button.png';
import { borderColor } from "@mui/system";
import { useIsOverflow } from '../utils/useIsOverflow';
import { useEffect, useState } from "react";

const MAX_BUTTON_WIDTH = 150;
const MIN_BUTTON_WIDTH = 80;

const MAX_OFFSET = 0;
const MIN_OFFSET = 0;

interface ButtonImageStorage {
  index: number
}

const random = (maxNum: number): number => {
  return (Math.floor(Math.random() * maxNum));
}

const ButtonImage = ({ index }: ButtonImageStorage): JSX.Element => {
  var width = random(MAX_BUTTON_WIDTH);
  if (width < MIN_BUTTON_WIDTH) {
    width = 100;
  }


  var leftOffset = random(MAX_OFFSET);
  if (leftOffset < MIN_OFFSET) {
    leftOffset = 100;
  }

  return (
    <button
      style={{
        height: width,
        width: width,
        position: 'relative',
        left: leftOffset,
        background: 'transparent',
        borderColor: 'transparent'
      }}
      onClick={() => {
        console.log(index);
        scroll();

      }}
    >
      <img src={ButtonImageSource}

        className="App-logo"
        alt="logo"
        style={{
          height: width,
          width: width,
          left: leftOffset
        }}
      ></img>
    </button>

  );
}

const scroll = () => {
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });
}

export const ButtonDisplay = () => {
  // Similar to componentDidMount and componentDidUpdate:  
  useEffect(() => {    // Update the document title using the browser API    
    scroll();
    //
  });

  return (

    <StackGrid
      style={{ maxWidth: "100%" }}
      columnWidth={MAX_BUTTON_WIDTH / 4}
      gutterWidth={0}

    >
      {[...Array(1000)].map((x, i) =>
        <ButtonImage key={i} index={i} />
      )}


    </StackGrid>);
}
