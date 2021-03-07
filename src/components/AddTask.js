// @ts-nocheck
import React, { useState } from "react";

export default function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert("All fields are mandatory");
    }

    let todo = {
      title,
      body,
      reminder,
    };
    onAdd(todo);

    setTitle("");
    setBody("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          value={title}
          placeholder="Create a title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Body</label>
        <input
          type="text"
          value={body}
          placeholder="Create a todo"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set a Reminder ?</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Add Todo" className="btn btn-block" />
    </form>
  );
}
