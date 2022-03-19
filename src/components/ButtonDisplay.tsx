
import StackGrid from "react-stack-grid";
import ButtonImageSource from '../resources/button.png';
import sizeMe from 'react-sizeme';


const random = (maxNum: number): number => {
  return (Math.floor(Math.random() * maxNum));
}

const ButtonImage = (): JSX.Element => {
  const width = random(400);
  return (
    <img src={ButtonImageSource} className="App-logo" alt="logo" style={{
      height: width,
      width: width,
      position: 'relative',
      left: random(100)
    }}></img>
  );
}

export const ButtonDisplay = () => {
  
  return (<StackGrid
    columnWidth={180}
    gutterWidth={0}
  >
    {[...Array(100)].map((x, i) =>
      <ButtonImage key={i} />
    )}


  </StackGrid>);
}