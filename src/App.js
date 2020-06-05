import React, { Component } from "react";
import "./styles.css";
import Activitate from "./Activitate";

class App extends Component {
  render() {
    const stilul = {
      marginTop: "20px"
    };
    return (
      <div>
        <h4>Lista activitati</h4>
        <ul style={stilul}>
          <Activitate culoare="yellow" mesaj="Prepar cafea" />
          <Activitate culoare="blue" mesaj="Ud gazonul" />
          <Activitate culoare="green" mesaj="Fac cumparaturi" />
        </ul>
      </div>
    );
  }
}
export default App;
