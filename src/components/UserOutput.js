import React from "react";

class UserOutput extends React.Component {
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
          borderRadius: "10px",
          boxShadow: "1px 2px 2px #ccc",
        }}
      >
        <div>
          <h1>UserOutput:</h1>
        </div>
        <p>loremp ipsum 1</p>
        <p>Username: {this.props.username}</p>
      </div>
    );
  }
}

export default UserOutput;
