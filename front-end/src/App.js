import React, {useEffect} from 'react'
import setUpTicker from './utils/ticker'

function App() {

  useEffect(()=> {
    setUpTicker()
    window.StockTicker.addListener(function (tick) {
      console.log('Stock tick:', tick);
  });
  },[])

  return (
    <div className="App">
      <p>Testing..</p>
    </div>
  );
}

export default App;
