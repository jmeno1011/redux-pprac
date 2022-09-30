import { useEffect } from "react";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import TodoContainer from "./containers/TodoContainer";
import { readPost } from "./lib/api/post";

function App() {
  useEffect(() => {
    readPost(1).then((res) => console.log(res.data));
  }, []);
  return (
    <div style={{ padding: "16px" }}>
      <h1>APP</h1>
      <CounterContainer />
      <TodoContainer />
    </div>
  );
}

export default App;
