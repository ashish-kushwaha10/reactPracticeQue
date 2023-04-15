import { useState } from "react";

export default function CategoryFilter(props) {
  let [catogory, setCatogory] = useState(props.items);
  function handlerFruit() {
    let filteredValue = props.items.filter((ele) => ele.category === "Fruit");
    setCatogory(filteredValue);
  }
  function handerVeg() {
    let filteredValue = props.items.filter(
      (ele) => ele.category === "Vegetable"
    );
    setCatogory(filteredValue);
  }

  return (
    <div className="App">
      <p>Welcome </p>

      <ul className="list-style">
        {catogory.map((ele) => {
          return <li>{ele.name}</li>;
        })}
      </ul>
      <button
        style={{ marginRight: "10px", padding: "10px 20px" }}
        onClick={handlerFruit}
      >
        fruit
      </button>
      <button style={{ padding: "10px 20px" }} onClick={handerVeg}>
        vegitables
      </button>
    </div>
  );
}
