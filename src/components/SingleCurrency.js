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
    border: "1px solid black",
    backgroundColor: "rgb(50, 56, 62)",
    borderRadius: "25px"
  };

  contentStylesHover = {
    margin: "0%",
    width: "100%",
    height: "100%",
    zIndex: "2",
    border: "2px solid black",
    backgroundColor: "rgb(82,91,94)"
  };

  contentStylesActive = {
    margin: "0%",
    width: "100%",
    height: "100%",
    border: "2px solid white",
    backgroundColor: "rgb(82,91,94)"
  };
  fontStyles = {
    fontSize: "1.25em",
    fontWeight: "bold"
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
          <div style={this.fontStyles}>{this.props.currency}</div>
          <div style={this.fontStyles}>{this.props.code}</div>
          <hr style={{ backgroundColor: "white" }} />
          <img
            className="img"
            style={{ float: "left", width: "50%", borderRadius: "20px" }}
            title="Hooray!"
            src="https://5.allegroimg.com/s512/01c181/956169274ec3b2e40ac172e9b7c5}"
            alt="Błąd ładowania"
          />
          <div>
            <div>
              <i>
                Kupno: <br />
                {this.props.ask}
              </i>
              <br />
              <i>
                Sprzedaż: <br />
                {this.props.bid}
              </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCurrency;
