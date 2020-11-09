import React from 'react';
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello World!</h1>
        <Cards/>
        <Chart/>
        <CountryPicker/>  
      </div>
    )
  }
}

export default App;