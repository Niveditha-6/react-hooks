import logo from "./logo.svg";
import "./App.css";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";

function App() {
  return (
    <div className="App">
      <h1>useState sample</h1>
      <UseState />
      <h1>useEffect sample</h1>
      <UseEffect />
    </div>
  );
}

export default App;
