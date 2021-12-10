import React, {useEffect} from 'react'
import styled from 'styled-components'

class Ticker extends React.Component {

  render(){
    return (
      <div>
        <p>{this.props.symbol}</p>
          <p>{this.props.info.end}</p>
          {/* <p>{info.end}</p> */}
      </div>
    );
  }
  
}


export default Ticker;