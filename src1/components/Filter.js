import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div
        style={{
          width: "inherit",
          textAlign: "center",
          margin: "10%",
          backgroundcolor: "red"
        }}
      >
        <input
          id="input"
          style={{
            borderRadius: "10px",
            width: "inherit",
            outline: "none"
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
