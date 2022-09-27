import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import TodoContainer from "./containers/TodoContainer";

function App() {
  return (
    <div style={{padding:'16px'}}>
      <h1>APP</h1>
      <CounterContainer />
      <TodoContainer />
    </div>
  );
}

export default App;
