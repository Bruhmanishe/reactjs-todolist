import React from "react";
import ToDoCard from "./ToDoCard";

export default function ToDoList({
  tasks,
  handleDeleteToDo,
  handleRedactToDo,
}) {
  return (
    <>
      <ul className="main">
        {[...tasks].map((task, id) => (
          <ToDoCard
            task={task}
            key={id}
            id={id}
            handleDeleteToDo={handleDeleteToDo}
            handleRedactToDo={handleRedactToDo}
          />
        ))}
      </ul>
    </>
  );
}
