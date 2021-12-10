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
    border: 1px solid red;
    font-size: 8px;
    margin-top: 0;
`


export default TickerHeader;