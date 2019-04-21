import React, { Component } from 'react';
import CurrencyTable from './components/CurrencyTable'
import CurrencyLineChart from './components/CurrencyLineChart'

import './App.css';

import {currency} from './data_test';
let counter = 0;
function createData(d) {
    counter += 1;
    return { id: counter, date: d[0], bid: d[1], ask: d[2]};
}
const data = currency.map(item => createData(item))


class App extends Component {
  render() {
    return (
        <div>
            <CurrencyTable data={data}/>
            <CurrencyLineChart data={data} />
        </div>
    );
  }
}

export default App;
