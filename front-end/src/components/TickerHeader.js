import React, {useEffect} from 'react'
import styled from 'styled-components'

class TickerHeader extends React.Component {

  render(){
    return (
      <TickerHeaderDiv>
        <p>{this.props.symbol}</p>
      </TickerHeaderDiv>
    );
  }
}

const TickerHeaderDiv = styled.div`
    font-size: 8px;
    
    color: black;
`


export default TickerHeader;