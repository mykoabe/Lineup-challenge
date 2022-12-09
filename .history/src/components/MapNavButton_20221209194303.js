import React, { Component } from "react";

class MapNavButton extends Component {
  render() {
    return (
      <button
        flat
        style={{
          width: "150px",
          textAlign: "left",
          textTransform: "capitalize",
          padding: "10px",
          background: "#00ff00",
          color: "#000",
        }}
        onClick={() => this.props.showDialog(this.props.buttonName)}
      >
        {this.props.buttonName}
      </button>
    );
  }
}

export default MapNavButton;
