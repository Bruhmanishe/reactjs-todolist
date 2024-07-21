import React, { useState, useEffect } from "react";

import ToDoInput from "./components/ToDoInput.jsx";
import ToDoList from "./components/ToDoList.jsx";

function App() {
  const [toDoes, setToDoes] = useState([]);
  const [toDoValue, setToDoValue] = useState("");

  function handleAddToDoes(newToDo) {
    const newToDoList = [...toDoes, newToDo];
    setToDoes(newToDoList);
    localStorage.setItem("toDoes", JSON.stringify(newToDoList));
  }

  function handleDeleteToDo(index) {
    const newToDoList = toDoes.filter((_, i) => i !== index);
    setToDoes(newToDoList);
    localStorage.setItem("toDoes", JSON.stringify(newToDoList));
  }

  function handleRedactToDo(index) {
    const valueToBeEdited = toDoes[index];
    setToDoValue(valueToBeEdited);
    handleDeleteToDo(index);
  }

  useEffect(() => {
    let localToDoes = JSON.parse(localStorage.getItem("toDoes"));
    setToDoes(localToDoes);
    console.log(localToDoes);
  }, []);

  return (
    <>
      <ToDoInput
        toDoValue={toDoValue}
        setToDoValue={setToDoValue}
        handleAddToDoes={handleAddToDoes}
        tasks={toDoes}
      />
      <ToDoList
        tasks={toDoes}
        handleDeleteToDo={handleDeleteToDo}
        handleRedactToDo={handleRedactToDo}
      />
    </>
  );
}

export default App;
