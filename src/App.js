import logo from "./logo.svg";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

function App() {
  return (
    <div className="App">
      <UserInput />
      <UserOutput />
    </div>
  );
}

export default App;
