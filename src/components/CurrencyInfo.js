import React, { Component } from "react";
import axios from "axios";

class CurrencyInfo extends Component {
  state = {
    data: null,
    dateStart: this.getDate(),
    dateEnd: this.getDate()
  };

  componentDidMount() {
    this.getData();
  }

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

  setInitialDate = date => {
    this.setState({
      dateStart: date,
      dateEnd: date
    });
  };

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
      .then(resp => {
        this.setState(prevState => {
          return {
            data: resp.data.rates
          };
        });
      });
  };

  render() {
    console.log(this.state);
    return <div>test</div>;
    //   <div>
    //     <div style={{ width: "100%" }}>
    //       <h4>Detale wybranej waluty</h4>
    //     </div>
    //     <div>
    //       <input
    //         style={{
    //           borderRadius: "10px",
    //           width: "15%",
    //           outline: "none"
    //         }}
    //         type="text"
    //         onChange={event =>
    //           this.props.applyFilter(document.getElementById("input").value)
    //         }
    //         value={this.state.dateStart}
    //         placeholder="format: yyyy-mm-dd "
    //       />
    //       <input
    //         style={{
    //           borderRadius: "10px",
    //           width: "15%",
    //           outline: "none"
    //         }}
    //         type="text"
    //         onChange={event =>
    //           this.props.applyFilter(document.getElementById("input").value)
    //         }
    //         value={this.state.dateEnd}
    //         placeholder="format: yyyy-mm-dd "
    //       />
    //     </div>
    //   </div>
    //);
  }
}

export default CurrencyInfo;
