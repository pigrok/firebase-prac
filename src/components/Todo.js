// components/Todo.js
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { collection, getDocs, query, doc, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Todo = () => {
  const [todos, setTodos] = useState([
    { text: "할 일 1", isDone: false, id: 1 },
    { text: "할 일 2", isDone: true, id: 2 },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "todos"));
      const querySnapshot = await getDocs(q);

      const initialTodos = [];

      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data(),
        };
        initialTodos.push(data);
      });

      setTodos(initialTodos);
    };

    fetchData();
  }, []);

  const [text, setText] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "text") {
      setText(value);
    }
  };

  const addTodo = async (event) => {
    event.preventDefault();
    const newTodo = { text: text, isDone: false };
    setTodos((prev) => {
      return [...todos, newTodo];
    });
    setText("");

    // Firestore에서 'todos' 컬렉션에 대한 참조 생성하기
    const collectionRef = collection(db, "todos");
    // 'todos' 컬렉션에 newTodo 문서를 추가합니다.
    await addDoc(collectionRef, newTodo);
  };

  return (
    <div>
      <h2>할 일 컴포넌트</h2>
      <form>
        <div>
          <label>할 일 : </label>
          <input
            type="text"
            value={text}
            name="text"
            onChange={onChange}
            required
          ></input>
          <button onClick={addTodo}>추가</button>
        </div>
      </form>
      <h3>Working</h3>
      {todos
        .filter((todo) => !todo.isDone)
        .map((todo) => {
          return <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />;
        })}
      <h3>Done</h3>
      {todos
        .filter((todo) => todo.isDone)
        .map((todo) => {
          return <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />;
        })}
    </div>
  );
};

export default Todo;
