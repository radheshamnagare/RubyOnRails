import React from "react";
import { Component } from "react";

class Features extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h1>Features !</h1>
            </div>
            <div className="card-body">
              <h4>Supported Language </h4>
              <ul>
                <li>English</li>
                <li>Arabic</li>
                <li>Chinese</li>
                <li>French</li>
                <li>German</li>
                <li>Hindi</li>
                <li>Indonesian</li>
                <li>Irish</li>
                <li>Italian</li>
                <li>Japanese</li>
                <li>Korean</li>
                <li>Polish</li>
                <li>Portuguese</li>
                <li>Russian</li>
                <li>Spanish</li>
                <li>Turkish</li>
                <li>Vietnamese</li>
              </ul>
              <br />
              <p>Speech Synthesis it is also Supported</p>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default Features