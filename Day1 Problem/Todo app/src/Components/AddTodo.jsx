import { useEffect, useState } from "react";
import Todo from "./Todo";

export default function AddTodo() {
  const [todo, setNewTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [id, setId] = useState(31);
  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setNewTodo(data.todos));
  }, []);
  const handleOnchange = (e) => {
    setInputValue(e.target.value);
  };
  const addTodo = (setInputValue) => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: id,
        todo: inputValue,
        completed: false,
      };
      setNewTodo((prevData) => [...prevData, newTodo]);
      setInputValue("");
      setId((prev) => prev + 1);
    }
  };
  const handleDelete = (id) => {
    setNewTodo((prevData) => prevData.filter((item) => item.id !== id));
  };
  const toggleComplete = (id) => {
    setNewTodo((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add Todos"
          aria-label="Add Todos"
          aria-describedby="button-addon2"
          value={inputValue}
          onChange={handleOnchange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <Todo
        items={todo}
        onDelete={handleDelete}
        onToggleComplete={toggleComplete}
      />
    </>
  );
}
