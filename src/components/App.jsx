import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import CurrenciesList from "./CurrenciesList";
import Filter from "./Filter";
import SingleCurrency from "./SingleCurrency";

class App extends Component {
  state = {
    data: [],
    filteredData: [],
    filterValue: ""
  };

  componentDidMount() {
    this.getData();
  }

  /*   componentDidUpdate() {
    this.setState(prevState => {
      return {
        filteredData: prevState.data.filter(element => {
          return element.code.indexOf(prevState.filterValue) !== -1;
        })
      };
    });
  } */

  getData = () => {
    setInterval(() => {
      axios.get("http://api.nbp.pl/api/exchangerates/tables/C").then(resp => {
        this.setState(prevState => {
          return {
            data: resp.data["0"].rates,
            filter: ""
          };
        });
      });
    }, 1000);
  };

  //applyFilter = filter => this.setState({ filterValue: filter });

  applyFilter = filter => {
    this.setState(prevState => {
      return {
        filteredData: prevState.data.filter(element => {
          return (
            element.code.toUpperCase().indexOf(filter.toUpperCase()) !== -1 ||
            element.currency.toUpperCase().indexOf(filter.toUpperCase()) !== -1
          );
        })
      };
    });
  };

  render() {
    var test = {
      currency: "złoty",
      code: "PLN",
      bid: "5.5",
      ask: "530"
    };
    return (
      <div className="container">
        <div className="row page-header ">
          <div className="col-sm-12 text-center">
            <h1>Kursy walut</h1>
          </div>
        </div>
        <hr />
        <div className="row">
          <div id="sidepanel" className="col col-sm-3  text-center">
            <div className="row ">
              <Filter applyFilter={this.applyFilter} />
              <br />
            </div>
            <div className="row">
              <div className="col sidebarr ">
                <CurrenciesList data={this.state.filteredData} />
              </div>
            </div>
          </div>

          <div className="col">
            <SingleCurrency {...test} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
