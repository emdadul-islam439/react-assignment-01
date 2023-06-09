import { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

function App() {
  const [username, setUsername] = useState("Emdadul Islam");
  const changeUsernameHandler = (event) => setUsername(event.target.value);
  return (
    <div className="App">
      <UserInput onChange={changeUsernameHandler} />
      <UserOutput username={username} />
      <UserOutput username={username} />
      <UserOutput username={username} />
    </div>
  );
}

export default App;
