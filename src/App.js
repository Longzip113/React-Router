import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "./component/menu";
import Route from "./routers";



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
          <Menu />

          {/* Nội dung */}
          <Route />
          
        </div>
      </Router>
    );
  }
}

export default App;
