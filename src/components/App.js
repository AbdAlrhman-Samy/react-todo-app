import "./App.css";
import Form from "./Form";
import List from "./List";

import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { text: " ¯\\_(ツ)_/¯", checked: false }
  ]);

  let newTodos = [...todos];

  newTodos.map((item) => localStorage.setItem(item.text, item.checked));

  let localKeys = Object.keys(localStorage);
  let localValues = Object.values(localStorage);

  const addTodo = (text) => {
    newTodos = [...todos, { text, checked: false }];
    setTodos(newTodos);
    console.log(newTodos);
  };

  function itemChecked(e) {
    let checkedKey = e.target.parentElement.getAttribute("data-key");
    let checkedValue = e.target.parentElement.getAttribute("data-val");

    if (checkedValue==='false'){
      localStorage.setItem(checkedKey, 'true')
      e.target.parentElement.classList.remove('done')
      setTodos(newTodos);
      console.log(checkedKey, checkedValue);

    } else if (checkedValue==='true'){
      localStorage.setItem(checkedKey, 'false')
      e.target.parentElement.classList.add('done')
      setTodos(newTodos);
      console.log(checkedKey, checkedValue);

    } else return


  }

  function itemDeleted(e) {
    let removedValue = e.target.parentElement.getAttribute("data-key");
    localStorage.removeItem(removedValue)
    setTodos(newTodos);
  }

  return (
    <div>
      <Form newItem={addTodo} />
      <List
        listItems={localKeys}
        listValues={localValues}
        handleCheck={itemChecked}
        handleDelete={itemDeleted}
      />
    </div>
  );
}

export default App;
