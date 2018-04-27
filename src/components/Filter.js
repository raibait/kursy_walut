import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div style={{ backgroundcolor: "red" }}>
        <input
          type="text"
          onChange={event => this.props.filter}
          placeholder="Czego szukasz?"
        />
      </div>
    );
  }
}

export default Filter;
