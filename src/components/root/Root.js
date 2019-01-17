import React from "react";

import NavBar from "../navbar/NavBar";
import Login from "../login/Login";
import Feed from "../feed/Feed";

export class Root extends React.Component {
  render() {
    return (
      <div className="container">
        <p> Heya its the Root/Main page</p>
        <Feed />
      </div>
    )
  }
}
