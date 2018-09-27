import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CountryDetail from './components/CountryDetail';


class App extends Component {
  render() {
    return (
      <div className="App">


<div class="row">
  <div class="col-5">Column 5/12</div>
  <div class="col-7">Column 7/12</div>
</div>


<div class="col-7 country-detail">
      <CountryDetail/>
      </div>

<div class="list-group col-5 navbar">
  <a href="#" class="list-group-item list-group-item-action active">Cras justo odio (active)</a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>


      </div>
    );
  }
}

export default App;
