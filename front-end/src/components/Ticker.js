import React, {useEffect} from 'react'
import styled from 'styled-components'

function Ticker(symbol,info) {

  return (
    <div>
        <p>{symbol}</p>
        <p>{info.end}</p>
    </div>
  );
}


export default Ticker;