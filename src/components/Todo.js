import { AiFillDelete } from "react-icons/ai";
import React, { Component } from "react";

// Just Playing around with the function and class implementations
// Calling Todo as a Function

// export default function Todo({ todo, onDelete, reminder }) {
//   return (
//     <div
//       className={`todo ${todo.reminder ? "reminder" : ""}`}
//       onDoubleClick={() => reminder(todo.id)}
//     >
//       <h4>
//         {" "}
//         {todo.title}{" "}
//         <AiFillDelete
//           style={{ color: "red", cursor: "pointer" }}
//           onClick={() => onDelete(todo.id)}
//         />
//       </h4>
//       <p> {todo.body} </p>
//     </div>
//   );
// }

////////////////////////////////////////////////////

// Calling Todo as a Class

export default class Todo extends Component {
  render() {
    return (
      <div
        className={`todo ${this.props.todo.reminder ? "reminder" : ""}`}
        onDoubleClick={() => this.props.reminder(this.props.todo.id)}
      >
        <h4>
          {" "}
          {this.props.todo.title}{" "}
          <AiFillDelete
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => this.props.onDelete(this.props.todo.id)}
          />
        </h4>
        <p> {this.props.todo.body} </p>
      </div>
    );
  }
}
