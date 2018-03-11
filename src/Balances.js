import React, { Component } from 'react';
import './Balances.css';
import CnyPhpRatesGrid from './CnyPhpRatesGrid';
import CnyUsdRatesGrid from './CnyUsdRatesGrid';  
import Conversion1 from './Conversion1';
import Modal from 'react-modal';

class App extends Component {

  state ={
    cnyModalIsOpen  : false,
    usdModalIsOpen  : false,
    convModalIsOpen : false
  };

  openCnyModal = () => (this.setState({cnyModalIsOpen: true}));

  closeCnyModal = () => (this.setState({cnyModalIsOpen: false}));

  openUsdModal = () => (this.setState({usdModalIsOpen: true}));

  closeUsdModal = () => (this.setState({usdModalIsOpen: false}));

  openConvModal = () => (this.setState({convModalIsOpen: true}));

  closeConvModal = () => (this.setState({convModalIsOpen: false}));

  render() {

    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    return (
          <div className="ui container">
              {/*CNY*/}
              <div className="ui attached raised red segment">
                  <div className="ui red ribbon label" onClick={this.openCnyModal}>
                  Chinese Yuan # CNYHLX001
                  </div>
                  <div className="ui red basic label" onClick={this.openConvModal}>Convert</div>
                  <h1 className="ui center aligned header">
                  ¥10,000.00
                  </h1>
                  <i className="redo icon"></i>                
              </div>  

              {/*PHP*/}
              <div className="ui attached raised blue segment">
                  <div className="ui blue ribbon label" onClick={this.openCnyModal}>
                  Philippines Piso # PHPHLX001
                  </div>
                  <div className="ui blue basic label" onClick={this.openConvModal}>Convert</div>
                  <h1 className="ui center aligned header">
                  ₱79,000.00
                  </h1>
                  <i className="redo icon"></i>                
              </div>

              {/*USD*/}
              <div className="ui attached raised green segment">
                  <div className="ui green ribbon label" onClick={this.openUsdModal}>
                  US Dollar # USDHLX001
                  </div>
                  <div className="ui green basic label" onClick={this.openConvModal}>Convert</div>
                  <h1 className="ui center aligned header">
                  $5,001.49
                  </h1>
                  <i className="redo icon"></i>                
              </div>


              <Modal
              isOpen={this.state.cnyModalIsOpen}
              onRequestClose={this.closeCnyModal}
              style={customStyles}
              ariaHideApp={false}
              >
                  <CnyPhpRatesGrid/>
              </Modal>
              <Modal
              isOpen={this.state.usdModalIsOpen}
              onRequestClose={this.closeUsdModal}
              style={customStyles}
              ariaHideApp={false}
              >
                  <CnyUsdRatesGrid/>
              </Modal>
              <Modal
              isOpen={this.state.convModalIsOpen}
              onRequestClose={this.closeConvModal}
              style={customStyles}
              ariaHideApp={false}
              >
                  <Conversion1/>
              </Modal>
          </div>
          
    );
  }
}

export default App;
