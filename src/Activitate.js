import React, { Component } from "react";

class Activitate extends Component {
  render() {
    const { mesaj } = this.props;
    const { culoare } = this.props;

    return (
      <li style={{ backgroundColor: culoare }} className="list-group-item">
        {mesaj}
      </li>
    );
  }
}
export default Activitate;
