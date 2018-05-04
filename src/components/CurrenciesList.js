import React, { Component } from "react";
import SingleCurrency from "./SingleCurrency";

class CurrenciesList extends Component {
  state = {
    hoveredCurrency: "",
    activeCurrency: ""
  };

  setHoveredCurrency = currencyCode => {
    return this.setState({ hoveredCurrency: currencyCode });
  };

  setActiveCurrency = currencyCode => {
    return this.setState({ activeCurrency: currencyCode });
  };

  render() {
    return (
      <div>
        <div>
          {this.props.data.map((data, i) => (
            <SingleCurrency key={i} {...data} />
          ))}
        </div>
      </div>
    );
  }
}

export default CurrenciesList;
