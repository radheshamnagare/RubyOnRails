// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "./stylesheet/navbar_style.css"
import Home, { text } from "./components/Home"
import About from "./components/About"
import Features from './components/Features'




const Hello = () => {

   const [active, setActive] = useState("home")

   return (
      <div id="out_nav">
         <div id="navbar_" >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <button className="navbar-brand btn btn-link nav-link" onClick={() => setActive("home")}>Translator </button>
               <ul className="navbar-nav">

                  <li className="nav-item">
                     <button className="btn btn-link nav-link" onClick={() => setActive("features")}>Feature</button>
                  </li>
                  <li className="nav-item">
                     <button className="btn btn-link nav-link" onClick={() => setActive("about")}>About</button>
                  </li>

               </ul>
            </nav>

         </div>

         {active == "home" && <Home />}
         {active == "about" && <About />}
         {active == "features" && <Features />}


      </div>
   )
}

export default Hello

ReactDOM.render(<Hello />, document.getElementById("root"))
