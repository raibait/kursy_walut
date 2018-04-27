import React, { Component } from 'react';
import './SingleCurrency.css';
class SingleCurrency extends Component {
    render() {
        return (
            <div className="SingleCurrency">
                <img  title="Hooray!" width='100' src = "https://5.allegroimg.com/s512/01c181/956169274ec3b2e40ac172e9b7c5}"
                    alt="Błąd ładowania"/>
			    <div   >
                    <div style={{ fontSize : '1.25em',fontWeight : 'bold' }}>{this.props.currency}</div>
                    <div style={{ fontSize : '1.25em',fontWeight : 'bold' }}>{this.props.code}</div>
                    <div>Kupno: {this.props.bid} Sprzedaż: {this.props.ask}</div>
			    </div>  
            </div>
      
        );
    }
}

export default SingleCurrency;