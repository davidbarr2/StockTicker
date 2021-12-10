import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import setUpTicker from '../utils/setUpTicker'
import UnitsOfChangePicker from './UnitsOfChangePicker';
import Ticker from './Ticker';

    const initialState = {
        changeUnitsIsDollar: true,
        stocks: {}
    }

class Card extends React.Component {
    constructor(props){
        super(props)
        this.state= initialState
    }

    updateStocks = (update) => {
        let newStocks = {...this.state.stocks}
        newStocks[update.symbol] = update
        delete newStocks[update.symbol]['symbol']
        this.setState({stocks: newStocks}, console.log(this.state))
    }

    componentDidMount(){
        setUpTicker()

        let that = this
        window.StockTicker.addListener(function (tick) {
            that.updateStocks(tick)
            console.log(tick)
        });
    }
    
      render(){
        return (
            <CardDiv>
                <CardHeaderDiv>
                    <UnitsOfChangePicker/>
                </CardHeaderDiv>
              {
                   Object.values(this.state.stocks).map((value) => (
                      <p>{value['end']}</p>
                  ))
              }
            </CardDiv>
          );
      }
}

const CardDiv = styled.div`
    border-radius: 15px;
    background: whitesmoke;
    width: 400px;
    margin: 2%;
`

const CardHeaderDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 5%;
`

export default Card;
