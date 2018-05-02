import React, { Component } from "react";
import "./SingleCurrency.css";
class SingleCurrency extends Component {
  state = {
    hover: false,
    active: false
  };
  render() {
    return (
      <div
        className="SingleCurrency"
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "100%"
        }}
      >
        <div
          className="content"
          style={{
            position: "absolute",
            height: "92%",
            width: "92%",
            textAlign: "center",
            margin: "4%",
            border: "2px solid blue"
          }}
        >
          <div
            style={{ fontSize: "1.25em", fontWeight: "bold", width: "100%" }}
          >
            {this.props.currency}
          </div>
          <div style={{ fontSize: "1.25em", fontWeight: "bold" }}>
            {this.props.code}
          </div>
          <hr />
          <img
            className="img"
            style={{ float: "left", width: "50%", borderRadius: "20px" }}
            title="Hooray!"
            src="https://5.allegroimg.com/s512/01c181/956169274ec3b2e40ac172e9b7c5}"
            alt="Błąd ładowania"
          />
          <div>
            <div>
              Kupno: {this.props.bid} <br /> Sprzedaż: {this.props.ask}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCurrency;
