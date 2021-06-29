import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea"

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((previousValue) => {
      return [...previousValue, inputText];
    });
  }

  function deletItem(id) {
    setItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <InputArea 
        onAdd={addItem}
        />
        <ul>
          {items.map((todoItem, index) => {
            return (
              <ToDoItem
                id={index}
                key={index}
                text={todoItem}
                onChecked={deletItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
