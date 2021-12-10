import React, {useEffect} from 'react'
import styled from 'styled-components'

import Card from './components/Card'

function App() {

  return (
    <ContainerDiv>
      <Card></Card>
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  background: #009688;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
