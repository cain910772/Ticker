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
        console.log(data);
        
      
            
            })
        }

 

render(){
    return(
        <div></div>)
    }
}