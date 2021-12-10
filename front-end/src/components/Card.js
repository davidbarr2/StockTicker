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

    updateStocks = (tick) => {
        let newStocks = {...this.state.stocks}
        let update= {...tick}
        newStocks[update.symbol] = update
        delete newStocks[update.symbol]['symbol']
        this.setState({stocks: newStocks}, 
            // () => console.log(this.state)
        )
    }

    componentDidMount(){
        setUpTicker()

        let that = this
        window.StockTicker.addListener(function (tick) {
            that.updateStocks(tick)
            console.log(tick)
        });
    }

    componentWillUnmount(){
       // add code to turn off StockTicker
    }
    
      render(){
        return (
            <CardDiv>
                <CardHeaderDiv>
                    <UnitsOfChangePicker setter={(newValue)=>this.setState({changeUnitsIsDollar: newValue})}/>
                </CardHeaderDiv>
                <TickerContainer>
                    {
                        Object.entries(this.state.stocks).map(([key, value], i) => (
                            <Ticker symbol={key} info={value} changeUnitsIsDollar={this.state.changeUnitsIsDollar}></Ticker>
                        ))
                    }
                </TickerContainer>
            </CardDiv>
          );
      }
}

const CardDiv = styled.div`
    border-radius: 15px;
    background: whitesmoke;
    width: 600px;
    margin: 2%;
`

const CardHeaderDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    
`

const TickerContainer = styled.div`
    display: flex;
    justify-content: center;
`

export default Card;
