import React, {useEffect} from 'react'
import styled from 'styled-components'

function Card() {

  useEffect(()=> {
    window.StockTicker.addListener(function (tick) {
      console.log('Stock tick:', tick);
  });
  },[])

  return (
    <CardDiv>
      <p>Card</p>
    </CardDiv>
  );
}

const CardDiv = styled.div`
    border-radius: 15px;
    background: whitesmoke;
    width: 400px;
    margin: 2%;
`

export default Card;
