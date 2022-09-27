import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, changeInput, remove, toggle } from "../modules/todo";

const TodoContainer = () => {
  const { input, todos } = useSelector((state) => ({
    input: state.todo.input,
    todos: state.todo.todos,
  }));
  const dispatch = useDispatch();
  const onChangeInput = useCallback(
    (input) => dispatch(changeInput(input)),
    [dispatch]
  );
  const onAdd = useCallback((text) => dispatch(add(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  const onChange = (e) => {
    onChangeInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(input);
    // 등록후 인풋 초기화
    onChangeInput("");
  };
  // const [onToggle] = useActions
  return (
    <div style={{ width: "50%" }}>
      <h3>todo redux</h3>
      <form
        onSubmit={onSubmit}
        style={{
          padding: "10px",
          border: "1px solid black",
          borderBottom: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span>입력 부분 : </span>
          <input value={input} onChange={onChange} />
        </div>
        <button type="submit">등록</button>
      </form>
      <div
        style={{
          border: "1px solid black",
          paddingBottom: "10px",
        }}
      >
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid black",
      }}
    >
      <div>
        <input
          type={"checkbox"}
          onClick={() => onToggle(todo.id)}
          checked={todo.done}
          readOnly
        />
        <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};
