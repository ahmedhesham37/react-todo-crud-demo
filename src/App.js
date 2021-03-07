import Todos from "./components/Todos";
import React, { useState } from "react";
import "./App.css";
import AddTask from "components/AddTask";
import Header from "components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "components/Footer";
import About from "components/About";

const name = "Ahmed Hesham";

function App() {
  const [showAdd, setshowAdd] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "React",
      body: "Study react",
      reminder: true,
    },
    {
      id: 2,
      title: "Docker",
      body: "Study docker",
      reminder: true,
    },
    {
      id: 3,
      title: "Nodejs",
      body: "Study Nodejs",
      reminder: false,
    },
  ]);

  const addTodo = (todo) => {
    let id = Math.floor(Math.random() * 10000) + 1;
    setTodos([...todos, { id, ...todo }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    // console.log("delete");
  };

  const reminder = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, reminder: !todo.reminder } : todo
      )
    );
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
