import React from "react";

class UserInput extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "30%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5px",
          marginBottom: "5px",
          border: "1px solid #ccc",
          boxShadow: "1px 2px 2px #ccc",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
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
