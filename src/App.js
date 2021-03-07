import Todos from "./components/Todos";
import React, { useEffect, useState } from "react";
import "./App.css";
import AddTask from "components/AddTask";
import Header from "components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "components/Footer";
import About from "components/About";

const name = "Ahmed Hesham";

function App() {
  const [showAdd, setshowAdd] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTodos();
      setTodos(tasksFromServer);
    };
    getTasks();
  }, []);

  // Fetch Todos
  const fetchTodos = async () => {
    const res = await fetch("http://localhost:5000/todos");
    const data = await res.json();

    return data;
  };

  const fetchTodo = async (id) => {
    const res = await fetch("http://localhost:5000/todos/" + id);
    const data = await res.json();

    return data;
  };

  const addTodo = async (todo) => {
    const res = await fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const data = await res.json();
    setTodos([...todos, data]);
  };

  const deleteTodo = async (id) => {
    const res = await fetch("http://localhost:5000/todos/" + id, {
      method: "DELETE",
    });
    res.status === 200
      ? setTodos(todos.filter((todo) => todo.id !== id))
      : alert("Error Deleting the task , please retry later");
  };

  const reminder = async (id) => {
    const toUpdateTodo = await fetchTodo(id);
    const updTodo = { ...toUpdateTodo, reminder: !toUpdateTodo.reminder };

    const res = await fetch("http://localhost:5000/todos/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTodo),
    });

    res.status === 200
      ? setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, reminder: !todo.reminder } : todo
          )
        )
      : alert("Error Updating the task");
  };

  return (
    <Router>
      <div className="container">
        <Header
          name={name}
          onAdd={() => setshowAdd(!showAdd)}
          showAdd={showAdd}
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAdd && <AddTask onAdd={addTodo} />}
              {todos.length > 0 ? (
                <Todos
                  todos={todos}
                  onDelete={deleteTodo}
                  reminder={reminder}
                />
              ) : (
                "No Tasks To View , You're good to go !"
              )}
            </>
          )}
        />
      </div>

      <Route path="/about" component={About} />
      <Footer />
    </Router>
  );
}

export default App;
