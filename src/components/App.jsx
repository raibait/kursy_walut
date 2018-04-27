import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import CurrenciesList from "./CurrenciesList";
import Filter from "./Filter";

class App extends Component {
  state = {
    data: [],
    filterValue: ""
  };

  componentDidMount() {
    this.getData();
  }

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

  applyFilter = filter => this.setState({ filterValue: filter });

  render() {
    return (
      <div className="container">
        <div className="row page-header ">
          <div className="col-sm-12 text-center">
            <h1>Kursy walut</h1>
          </div>
        </div>
        <div className="row">
          <div id="sidepanel" className="col col-sm-3  text-center">
            <div className="row ">
              <Filter applyFilter={this.applyFilter} />
            </div>
            <div className="row">
              <div className="col sidebarr ">
                <CurrenciesList data={this.state.data} />
              </div>
            </div>
          </div>

          <div className="col">ADASDASDA</div>
        </div>
      </div>
    );
  }
}

export default App;
