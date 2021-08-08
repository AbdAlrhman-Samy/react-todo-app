import "./App.css";
import Form from "./Form";
import List from "./List";

import {useState} from 'react'


function App() {

  const [todos, setTodos] = useState([
    { text: "Drink water",
    checked: false
   },
    { text: "Save Earth",
    checked: false },
  ])

  let newTodos = [...todos];

  const addTodo = (text) => {
    newTodos = [...todos, { text, checked:false }];
    setTodos(newTodos);
    console.log(newTodos);
  };

  function itemChecked(e) {
    e.target.parentElement.classList.toggle('done')
    let checkedIndex = e.target.parentElement.getAttribute('data-id')
    newTodos[checkedIndex].checked = !newTodos[checkedIndex].checked
    console.log(newTodos[checkedIndex]);
  }

  function itemDeleted(e) {
    let removedIndex = e.target.parentElement.getAttribute('data-id')
    newTodos.splice(removedIndex, 1)
    setTodos(newTodos);
    console.log('deleted item number', Number(removedIndex)+1);
  }

  return (
    <div>
      <Form newItem={addTodo}/>
      <List listItems={todos} handleCheck={itemChecked} handleDelete={itemDeleted}/>
    </div>
  );
}

export default App;