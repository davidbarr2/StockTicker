import React from 'react'
import styled from 'styled-components'

function UnitsOfChangePicker({currentValue, setter}) {

  function changeUnits(newValue){
    setter(newValue)
  }

  const StyledSpan = styled.span(props => ({
    fontWeight: props.bold ? '900' : 'none'
  }))

  return (
    <div>
        <StyledSpan bold={currentValue} onClick={()=>changeUnits(true)}>$</StyledSpan>
        <span> | </span>
        <StyledSpan bold={!currentValue} onClick={()=>changeUnits(false)}>%</StyledSpan>
    </div>
  );
}



export default UnitsOfChangePicker;