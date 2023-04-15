import { useState } from "react";

export default function HeroVillains(props) {
  const [char, setChar] = useState([]);
  function clickHandlerH() {
    setChar(props.char.heroes);
  }
  function clickHandlerV() {
    setChar(props.char.villains);
  }
  return (
    <div className="App">
      <h1>HeroVillains </h1>
      <button onClick={clickHandlerH}>heroes</button>
      <button onClick={clickHandlerV}>villains</button>
      <ul className="list-style">
        {char.map((ele) => {
          return <li>{ele.name}</li>;
        })}
      </ul>
    </div>
  );
}
