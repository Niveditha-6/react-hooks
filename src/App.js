import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/useCallback/UseCallback";
import { ThemeProvider } from "./components/useContext/ThemeContext";
import UseContext from "./components/useContext/UseContext";
import UseRef from "./components/UseRef";

function App() {
  return (
    <div className="App">
      <h1>useState sample</h1>
      <UseState />
      <h1>useEffect sample</h1>
      <UseEffect />
      <h1>useMemo sample</h1>
      <UseMemo />
      <h1>useCallback sample</h1>
      <UseCallback />
      <h1>useContext sample</h1>
      <ThemeProvider>
        <UseContext />
      </ThemeProvider>
      <h1>useRef sample</h1>
      <UseRef />
    </div>
  );
}

export default App;
