import React from "react";

export default function ToDoCard({
  handleDeleteToDo,
  id,
  task,
  handleRedactToDo,
}) {
  return (
    <li className="todoItem" key={id}>
      <p>{task}</p>
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleRedactToDo(id);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteToDo(id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
