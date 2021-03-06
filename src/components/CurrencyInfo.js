import React, { Component } from "react";
import axios from "axios";
import CurrencyHistoryTable from "./CurrencyHistoryTable";

class CurrencyInfo extends Component {
  inputStyles = {
    borderRadius: "10px",
    width: "20%",
    outline: "none",
    backgroundColor: "rgb(50, 56, 62)",
    color: "rgb(230, 230, 230)"
  };

  state = {
    data: [],
    dateStart: this.getDate(1),
    dateEnd: this.getDate()
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevPorps, prevState) {
    if (
      prevPorps.activeCurrency !== this.props.activeCurrency ||
      prevState.dateStart !== this.state.dateStart ||
      prevState.dateEnd !== this.state.dateEnd
    ) {
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
  getDate(monthsBack) {
    monthsBack = monthsBack || 0;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1 - monthsBack; //January is 0!
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
        <hr style={{ backgroundColor: "white" }} />
        <br />
        <div>
          Od:&nbsp;
          <input
            id="inputStartDate"
            style={this.inputStyles}
            type="text"
            onChange={() =>
              this.setState({
                dateStart: document.getElementById("inputStartDate").value
              })
            }
            value={this.state.dateStart}
            placeholder="format: yyyy-mm-dd"
          />
          Do:&nbsp;
          <input
            id="inputEndDate"
            style={this.inputStyles}
            type="text"
            onChange={() =>
              this.setState({
                dateEnd: document.getElementById("inputEndDate").value
              })
            }
            value={this.state.dateEnd}
            placeholder="format: yyyy-mm-dd"
          />
        </div>
        <br />
        <div style={{ height: "600px", overflowY: "auto" }}>
          <CurrencyHistoryTable data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default CurrencyInfo;
