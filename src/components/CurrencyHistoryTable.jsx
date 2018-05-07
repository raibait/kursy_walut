import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class CurrencyHistoryTable extends Component {
  tableHeaderStyle = { borderBottom: "1px solid black" };
  tableCellStyle = {
    borderRight: "1px solid black",
    borderLeft: "1px solid black"
  };

  lastTableCellStyle = {
    ...this.tableCellStyle,
    borderBottom: "1px solid black"
  };

  fnTableCellStyle = (data, i) =>
    this.props.data.length - 1 === i
      ? this.lastTableCellStyle
      : this.tableCellStyle;

  pickTrend = currencyState => {
    if (currencyState === "increase") {
      let fontSize = "22px";
      return (
        <i
          className="fa fa-arrow-circle-up"
          style={{ fontSize: this.fontSize, color: "green" }}
        />
      );
    }
    if (currencyState === "drop") {
      return (
        <i
          className="fa fa-arrow-circle-down"
          style={{
            fontSize: this.fontSize,
            color: "red"
          }}
        />
      );
    }
    if (currencyState === "still") {
      return (
        <i
          className="fa fa-arrow-circle-right"
          style={{ fontSize: this.fontSize, color: "blue" }}
        />
      );
    }
  };
  render() {
    return (
      <div>
        <table style={{ width: "100%" }}>
          <tr style={this.tableHeaderStyle}>
            <th>Data</th>
            <th>Kupno</th>
            <th>Sprzedaż</th>
            <th>Trend</th>
          </tr>

          {this.props.data.map((data, i) => (
            <tr key={i}>
              <td style={this.fnTableCellStyle(data, i)}>
                {this.props.data[i].effectiveDate}
              </td>
              <td style={this.fnTableCellStyle(data, i)}>
                {this.props.data[i].ask}
              </td>
              <td style={this.fnTableCellStyle(data, i)}>
                {this.props.data[i].bid}
              </td>
              <td style={this.fnTableCellStyle(data, i)}>
                {this.pickTrend(this.props.data[i].state)}
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default CurrencyHistoryTable;
