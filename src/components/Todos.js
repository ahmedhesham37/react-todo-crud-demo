import React from "react";
import Todo from "./Todo";

export default function Todos({ todos, onDelete, reminder }) {
  return (
    <div className="todo">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            reminder={reminder}
          />
        );
      })}
    </div>
  );
}
