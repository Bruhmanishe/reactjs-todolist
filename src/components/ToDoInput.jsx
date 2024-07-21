import React, { useState, useContext, createContext } from "react";

export default function ToDoInput({
  tasks,
  handleAddToDoes,
  toDoValue,
  setToDoValue,
}) {
  function handleOnChange(e) {
    setToDoValue(e.target.value);
  }

  return (
    <header>
      <input
        placeholder="Enter to do..."
        type="text"
        maxLength={100}
        id="taskInput"
        value={toDoValue}
        onChange={handleOnChange}
      />
      <button
        onClick={() => {
          if (toDoValue.length > 0) {
            handleAddToDoes(toDoValue);
            setToDoValue("");
          }
        }}
      >
        Add
      </button>
    </header>
  );
}
