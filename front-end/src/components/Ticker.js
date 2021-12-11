import React from 'react'
import styled from 'styled-components'
import TickerHeader from './TickerHeader'

class Ticker extends React.Component {

  priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  })
  
  dollarChangeFormatter = new Intl.NumberFormat('en-us', {
    signDisplay: 'always'
  })

  percentFormatter = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    signDisplay: 'always'
  })

  TickerBox = styled.div(props => ({
    border: "1px solid grey",
    padding: "0 4% 4% 4%",
    marginBottom: "2%",
    color: props.change > 0 ? 'green' : 'red'
  }))


  render(){
    return (
      <this.TickerBox change={this.props.info.change}>
        <TickerHeader symbol={this.props.symbol}/>
          <span>{this.priceFormatter.format(this.props.info.end)}</span>
          {
            this.props.changeUnitsIsDollar && <span> ({this.dollarChangeFormatter.format(this.props.info.change)})</span>
          }
          {
            !this.props.changeUnitsIsDollar && <span> ({this.percentFormatter.format(this.props.info.change / this.props.info.start)})</span>
          }
      </this.TickerBox>
    );
  }
  
}




export default Ticker;