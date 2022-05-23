import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  
  const [id, setId] = useState(1);
  const [todos, setTodos] = useState([{ id: 1, title: "todo", done: false }]);

  const incrementId = () => setId((prevId) => (prevId += 1));
  
  const handleAddTodo = event => {
    const e = event.target;

    if (event.key === "Enter") {
      incrementId();
      setTodos([...todos, { id: id, title: e.value, done: false }]);
      e.value = "";
    }

  };

  const handleDeleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div className="App">
      <div className="HeaderContainer">
        <div className="HeaderContent">
          <img style={{ width: 120 }} src={logo} alt="React-Logo" />
          <h1>React Todo</h1>
        </div>
        <div className="SearchInputContainer">
          <input className="InputItem" placeholder="Suche" />
        </div>
      </div>

      <div className="MainContainer">
        <div className="TodoInputContainer">
          <input onKeyDown={handleAddTodo} placeholder="Hier Todo hinzufügen" className="InputItem" />
        </div>

        <div className="TodoListContainer">
          <h2>Zu erledigen:</h2>

          {todos.map(todo => (
            <div key={todo.id} className="TodoItemContainer">
              <input type="checkbox"></input>
              <p className="TodoItemText">{todo.title}</p>
              <button onClick={() => handleDeleteTodo(todo.id)} className="TodoItemDeleteButton">&#x2715;</button>
            </div>
          ))}

        </div>

        <div className="TodoListContainer">
          <h2>Erledigt:</h2>

          <div className="TodoItemContainer">
            <input type="checkbox"></input>
            <p className="TodoItemText">Todo</p>
            <button className="TodoItemDeleteButton">&#x2715;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
