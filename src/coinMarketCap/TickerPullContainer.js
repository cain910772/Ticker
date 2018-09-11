import React, { Component } from 'react';


export default class TickerPullContainer extends React.Component{

    state = {
        data:[]
    }


componentDidMount(){
    fetch(" https://api.coinmarketcap.com/v2/ticker/")
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        let myTicker = data.res.map((coin)=>{
            return(
                <div key = {coin.res}/>
                
                </div>

 
    }
}        
        }
    )

}
render(){
    return(
        <div></div>)
    }
}