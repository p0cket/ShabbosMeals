import React from "react";

import NavBar from "../navbar/NavBar";
import Login from "../login/Login";

export class Root extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <p> Heya its the Root/Main page</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
          </div>
        </div>
      </div>
    )
  }
}
