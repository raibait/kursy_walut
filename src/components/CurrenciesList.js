import React from "react";
import SingleCurrency from "./SingleCurrency";

const CurrenciesList = props => (
  <div>{props.data.map((data, i) => <SingleCurrency key={i} {...data} />)}</div>
);
export default CurrenciesList;
