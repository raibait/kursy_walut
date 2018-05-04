import React, { Component } from "react";
import SingleCurrency from "./SingleCurrency";

class CurrenciesList extends Component {
  state = {
    activeCurrency: ""
  };

  setActiveCurrency = currencyCode => {
    return this.props.setActiveCurrency(currencyCode);
  };

  render() {
    return (
      <div>
        <div>
          {this.props.data.map((data, i) => (
            <SingleCurrency
              key={i}
              {...data}
              setActiveCurrency={this.setActiveCurrency}
              activeCurrency={this.props.activeCurrency}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CurrenciesList;
