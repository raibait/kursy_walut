import React, { Component } from "react";

class SingleCurrency extends Component {
  state = { hover: false };
  contentStyles = {};
  contentStylesStatic = {
    position: "absolute",
    height: "92%",
    width: "92%",
    textAlign: "center",
    margin: "4%",
    border: "2px solid blue",
    backgroundColor: "rgb(203, 225, 247)",
    borderRadius: "25px"
  };

  contentStylesHover = {
    margin: "0%",
    width: "100%",
    height: "100%",
    zIndex: "2",
    backgroundColor: "rgb(75, 196, 196)"
  };

  contentStylesActive = {
    margin: "0%",
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(37, 163, 54)"
  };

  toggleHover = () => {
    this.setState(prevState => {
      return {
        hover: !this.state.hover
      };
    });
  };

  toggleActive = () => {
    this.props.setActiveCurrency(this.props.code);
  };

  render() {
    if (this.props.activeCurrency === this.props.code) {
      this.contentStyles = {
        ...this.contentStylesStatic,
        ...this.contentStylesActive
      };
    } else if (this.state.hover) {
      this.contentStyles = {
        ...this.contentStylesStatic,
        ...this.contentStylesHover
      };
    } else {
      this.contentStyles = {
        ...this.contentStylesStatic
      };
    }
    console.log(this.props);
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
          style={this.contentStyles}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          onClick={this.toggleActive}
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
