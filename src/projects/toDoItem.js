import { useState } from "react";

export default function ToDo(props) {
  let [todo, setToDo] = useState(props.todoItems);
  // let strikeStyle = { textDecoration: "line-through" };
  function clickHandler(id) {
    let remainingItem = todo.filter((ele) => ele.id !== id);
    setToDo(remainingItem);
  }
  return (
    <div className="App">
      <p>Hi I am TO do item </p>

      <ul className="list-style">
        {todo.map((ele) => {
          return (
            <li
              key={ele.id}
              // style={{ textDecoration: ele.isDone ? "line-through" : false }}
              className={ele.isDone && "strike-thtrou"}
            >
              {ele.task} <button onClick={() => clickHandler(ele.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
