import React, { Component } from "react";
import "./SingleCurrency.css";
class SingleCurrency extends Component {
  render() {
    return (
      <div
        className="SingleCurrency"
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "100%",
          backgroundColor: "pink"
        }}
      >
        <div
          className="content"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            textAlign: "center"
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
            style={{ float: "left", width: "50%" }}
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
