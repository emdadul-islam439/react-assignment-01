import React from "react";
import "./UserInput.css";

class UserInput extends React.Component {
  render() {
    return (
      <div className="UserInput">
        <div>
          <h1>UserInput:</h1>
        </div>
        <input
          type="textInput"
          onChange={this.props.onChange}
          value={this.props.username}
          style={{ marginBottom: "30px" }}
        />
      </div>
    );
  }
}

export default UserInput;
