import React from "react";

class UserOutput extends React.Component {
  render() {
    return (
      <div>
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
