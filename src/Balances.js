import React, { Component } from 'react';
import './Balances.css';
import RatesGrid from './RatesGrid'; 
import Conversion from './Conversion';

class App extends Component {
  render() {
    return (
          <div className="ui container">
          <h3 className="ui top attached header">
            Acct # : CNYHLX001
          </h3>
          <div className="ui attached raised red segment">
          <a className="ui red ribbon label">
          Chinese Yuan
          </a>
            <div className="ui three column center page grid"> 
              <div className="column">
              </div>
              <div className="column">
              <div className="ui label">REFRESH</div>
              </div>
              <div className="column">
              <div className="ui red basic label">Convert</div>
              </div>
            </div>  
              <h1 className="ui center aligned header">
              ¥100,000.00
              </h1>
          </div>
          <h3 className="ui attached header">
            Acct # : PHPHLX001
          </h3>
          <div className="ui attached raised blue segment">
          <a className="ui blue ribbon label">Philippine Peso</a>
          <div className="ui three column center page grid"> 
          <div className="column">
          </div>
          <div className="column">
          <div className="ui label">REFRESH</div>
          </div>
          <div className="column">
          <div className="ui blue basic label">Convert</div>
          </div>
          </div>
          <h1 className="ui center aligned header">
          ₱79,000.00
          </h1>
          </div>
          <h3 className="ui attached attached header">
            Acct # : USDHLX001
          </h3>
          <div className="ui attached raised green segment">
          <a className="ui green ribbon label">US Dollar</a>
          <div className="ui three column center page grid"> 
              <div className="column">
              </div>
          <div className="column">
          <div className="ui label floated right">REFRESH</div>
          </div>
          <div className="column">
          <div className="ui blue basic label">Convert</div>
          </div>
          </div>
          <h1 className="ui center aligned header">
          $49.00
          </h1>
          </div>
          
          <div className="ui horizontal divider"/>
          <RatesGrid/>
          <div className="ui horizontal divider"/>
          <Conversion/>
          </div>
          
    );
  }
}

export default App;
