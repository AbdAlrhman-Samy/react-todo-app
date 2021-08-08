import "./App.css";
import Form from "./Form";
import List from "./List";

import {useState} from 'react'


function App() {

  const [todos, setTodos] = useState([
    { text: "Drink water",
    checked: true
   },
    { text: "Save Earth",
    checked: false },
  ])

  const addTodo = (text) => {
    const newTodos = [...todos, { text, checked:false }];
    setTodos(newTodos);
    console.log(newTodos);
  };

  function itemChecked(e) {
    e.target.parentElement.classList.toggle('done')
    console.log(e.target.parentElement);
  }

  function itemDeleted(e) {
    console.log('deleted item');
    e.target.parentElement.remove()
  }

  return (
    <div>
      <Form newItem={addTodo}/>
      <List listItems={todos} handleCheck={itemChecked} handleDelete={itemDeleted}/>
    </div>
  );
}

export default App;
