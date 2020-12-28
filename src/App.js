import React, { useState, useEffect } from "react";
import ContentWrapper from "./components/hoc/ContentWrapper";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <ContentWrapper>
      <TodoForm
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
    </ContentWrapper>
  );
}

export default App;
