import React, { Component } from "react";
import axios from "axios";
import CurrencyHistoryTable from "./CurrencyHistoryTable";

class CurrencyInfo extends Component {
  state = {
    data: [],
    dateStart: "2018-04-07",
    dateEnd: this.getDate()
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevPorps) {
    if (prevPorps.activeCurrency !== this.props.activeCurrency) {
      this.getData();
    }
  }

  getData = () => {
    axios
      .get(
        "http://api.nbp.pl/api/exchangerates/rates/C/" +
          this.props.activeCurrency +
          "/" +
          this.state.dateStart +
          "/" +
          this.state.dateEnd
      )
      .then(response => {
        this.addIncreaseDropInfo(response);
        this.setState(() => {
          return {
            data: response.data.rates.reverse()
          };
        });
      });
  };

  addIncreaseDropInfo = resp => {
    for (let i = 1; i < resp.data.rates.length; i++) {
      if (
        parseFloat(resp.data.rates[i].bid) >
        parseFloat(resp.data.rates[i - 1].bid)
      ) {
        resp.data.rates[i].state = "increase";
      } else if (
        parseFloat(resp.data.rates[i]) ===
        parseFloat(resp.data.rates[i - 1].bid)
      ) {
        resp.data.rates[i].state = "still";
      } else {
        resp.data.rates[i].state = "drop";
      }
    }

    return resp;
  };
  getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    return today;
  }

  render() {
    return (
      <div>
        <div style={{ width: "100%" }}>
          <h4>Historyczne kursy wybranej waluty</h4>
        </div>
        <br />
        <div>
          Od:
          <input
            style={{
              borderRadius: "10px",
              width: "15%",
              outline: "none"
            }}
            type="text"
            //onChange={event =>
            //this.props.applyFilter(document.getElementById("input").value)
            //}
            value={this.state.dateStart}
            placeholder="format: yyyy-mm-dd "
          />
          Do:
          <input
            style={{
              borderRadius: "10px",
              width: "15%",
              outline: "none"
            }}
            type="text"
            //onChange={event =>
            //this.props.applyFilter(document.getElementById("input").value)
            //}
            value={this.state.dateEnd}
            placeholder="format: yyyy-mm-dd "
          />
        </div>
        <br />
        <div>
          <CurrencyHistoryTable data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default CurrencyInfo;
