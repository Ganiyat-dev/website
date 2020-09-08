import React, { Component } from "react";
import Contacts from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   return <div className="App"></div>;
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div>
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
