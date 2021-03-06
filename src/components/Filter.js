import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div
        style={{
          width: "inherit",
          textAlign: "center",
          margin: "10%"
        }}
      >
        <input
          id="input"
          style={{
            borderRadius: "10px",
            width: "inherit",
            outline: "none",
            backgroundColor: "rgb(50, 56, 62)",
            color: "inherit"
          }}
          type="text"
          onChange={event =>
            this.props.applyFilter(document.getElementById("input").value)
          }
          placeholder="Czego szukasz?"
        />
      </div>
    );
  }
}

export default Filter;
