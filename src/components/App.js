import MyForm from "./Form";
import List from "./List";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import { Container } from "react-bootstrap";


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
    let checkedIndex = e.target.getAttribute('data-id')
    newTodos[checkedIndex].checked = !newTodos[checkedIndex].checked
    e.target.parentElement.parentElement.classList.toggle('text-decoration-line-through')
    console.log(newTodos[checkedIndex]);

  }

  function itemDeleted(e) {
    let removedIndex = e.target.getAttribute('data-id')
    newTodos.splice(removedIndex, 1)
    setTodos(newTodos);
  }

  return (
    <Container className="d-flex flex-column text-center" fluid="sm">
      <h1 className="display-2 mb-5 text-white">What Are we doing today, boss?</h1>
      <MyForm newItem={addTodo}/>
      <List listItems={todos} handleCheck={itemChecked} handleDelete={itemDeleted}/>
    </Container>
  );
}

export default App;
