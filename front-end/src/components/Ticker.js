import React, {useEffect} from 'react'
import styled from 'styled-components'
import TickerHeader from './TickerHeader'

class Ticker extends React.Component {

  percentFormatter = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    signDisplay: 'always'
  })

  render(){
    return (
      <TickerBox>
        <TickerHeader symbol={this.props.symbol}/>
          <span>${this.props.info.end}</span>
          {
            this.props.changeUnitsIsDollar && <span> ( ${this.props.info.change} )</span>
          }
          {
            !this.props.changeUnitsIsDollar && <span> ({this.percentFormatter.format(this.props.info.change / this.props.info.start)})</span>
          }
      </TickerBox>
    );
  }
  
}

const TickerBox = styled.div`
  border: 1px solid grey;
  padding: 0 4% 4% 4%;
  margin-bottom: 2%;
`


export default Ticker;