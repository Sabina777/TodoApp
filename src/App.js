import React, { useState, useEffect } from "react";
import ContentWrapper from "./components/hoc/ContentWrapper";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <ContentWrapper>
      <TodoForm />
      <TodoList />
    </ContentWrapper>
  );
}

export default App;
