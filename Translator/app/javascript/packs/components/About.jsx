import React from "react";
import { Component } from "react";

class About extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>About Us ...!</h1><br />
          <div className="card">
            <div className="card-body text-black">
              Free and Open Source Machine Translation API, entirely self-hosted.
              Unlike other APIs, it doesn't rely on proprietary providers such as Google or Azure to
              perform translations.Instead, its translation engine is powered by the open source Argos
              Translate library.
              <br /><br />
              <a href="https://github.com/LibreTranslate/LibreTranslate" >
                read more
              </a>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default About