import React, {useEffect} from 'react'
import styled from 'styled-components'

function UnitsOfChangePicker({setter}) {

  function changeUnits(newValue){
    setter(newValue)
  }

  return (
    <UnitPickerDiv>
        <span onClick={()=>changeUnits(true)}>$</span>
        <span> | </span>
        <span onClick={()=>changeUnits(false)}>%</span>
    </UnitPickerDiv>
  );
}

const UnitPickerDiv = styled.div`
  padding: 2%;
`


export default UnitsOfChangePicker;