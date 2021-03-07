import React from "react";
import Button from "./Button";

export default function Header({ name, onAdd, showAdd }) {
  return (
    <div className="header">
      <h1> Todos List For {name}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </div>
  );
}
