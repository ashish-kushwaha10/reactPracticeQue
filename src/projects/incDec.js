import { useState } from "react";

export default function IncDec(props) {
  let [font, setFont] = useState(18);
  function handlerPlus() {
    setFont((font = font + 1));
  }
  function handlerMinus() {
    setFont((font = font - 1));
  }
  console.log(font);
  return (
    <div className="App">
      <p style={{ fontSize: font }}>Welcome </p>
      <button style={{ marginRight: "10px" }} onClick={handlerPlus}>
        +
      </button>
      <button onClick={handlerMinus}>-</button>
    </div>
  );
}
