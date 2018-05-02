import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div
        style={{
          width: "inherit",
          textAlign: "center",
          margin: "15px",
          backgroundcolor: "red"
        }}
      >
        <input
          id="input"
          style={{
            borderRadius: "15px",
            width: "inherit"
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
