import React from "react";

class UserInput extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>UserInput:</h1>
        </div>
        <input
          type="textInput"
          onChange={this.props.onChange}
          value={this.props.username}
        />
      </div>
    );
  }
}

export default UserInput;
