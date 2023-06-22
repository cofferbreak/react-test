import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [face, setFace] = useState(true);

  const onClickButton = () => {
    setNum(num + 1);
  };
  const onClickFace = () => {
    setFace(!face);
  };
  useEffect(() => {
    if (num % 3 === 0) {
      face || setFace(true);
    } else {
      face && setFace(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="blue">how are you?</ColorfulMessage>
      <ColorfulMessage color="pink">yes</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
      <button onClick={onClickFace}>on/off</button>
      <p>{num}</p>
      {face && <p>(^_^;)</p>}
    </>
  );
};

export default App;
