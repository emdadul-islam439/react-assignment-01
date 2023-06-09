import { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

function App() {
  const [username, setUsername] = useState("Emdadul Islam");
  return (
    <div className="App">
      <UserInput />
      <UserOutput username={username} />
      <UserOutput username={username} />
      <UserOutput username={username} />
    </div>
  );
}

export default App;
