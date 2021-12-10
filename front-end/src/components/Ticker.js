import React, {useEffect} from 'react'
import styled from 'styled-components'
import TickerHeader from './TickerHeader'

class Ticker extends React.Component {

  currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  render(){
    return (
      <TickerBox>
        <TickerHeader symbol={this.props.symbol}/>
          <span>${this.props.info.end}</span>
          {
            this.props.changeUnitsIsDollar && <span>dollars here</span>
          }
          {
            !this.props.changeUnitsIsDollar && <span>percent here</span>
          }
      </TickerBox>
    );
  }
  
}

const TickerBox = styled.div`
  border: 1px solid grey;
  padding: 0 4%;
`


export default Ticker;