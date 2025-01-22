import { useState } from "react";
export default function TodoApp() {
  const [todo, setTodo] = useState("Learn React");
  return (
    <>
      <h1>Todo App</h1>
      <form>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
