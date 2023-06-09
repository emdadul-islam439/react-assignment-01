import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

function App() {
  return (
    <div className="App">
      <UserInput />
      <UserOutput username="Emdad" />
      <UserOutput username="Sajid" />
      <UserOutput username="Sakib" />
    </div>
  );
}

export default App;
