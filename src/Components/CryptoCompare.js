import React, { Component } from 'react';


export default class CryptoCompare extends React.Component{

    componentDidMount() {
        const newState = {coinData:[]}
        let coinInfo =
            fetch("GET/v1/exchangerate/BTC?apikey=96AD48AC-7220-4E3F-913E-35B94059CABE")
            .then (console.log(coinInfo))
            
                // .then(r => r.json())
                // .then(coinData => newState.coinData = newState
                //     .then(() => this.setState(newState)
                // )
    }
    render() {
        return (
            <div></div>
        )
    }
}
