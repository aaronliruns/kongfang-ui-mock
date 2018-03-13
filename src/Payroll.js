import React from 'react';
import Paytable from './Paytable';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';



class Payroll extends React.Component {

    state = {
        startDate: moment()
    };

    handleChange = (date) => (
        this.setState({
          startDate: date
        })
    );
  

    render() {
        return (
            <div className="ui container">
                <div className="ui form">
                    <div className="two fields">
                        <div className="field">
                        <label>Username</label>
                        <input placeholder="e.g.,tyc888" type="text"/>
                        </div>
                        <div className="field">
                        <label>Password</label>
                        <input placeholder="Password" type="password"/>
                        </div>
                    </div>
                    <div className="ui black submit button">Submit</div>
                    <div className="ui label">
                        <i className="phone volume icon"></i>
                        Please contact customer service for creation of business account
                    </div>
                </div>
                <div className="ui horizontal divider">
                Balances
                </div>
                <div className="ui three cards">
                    <div className="card">
                        <div className="content">
                            <div className="ui red ribbon label">
                            Chinese Yuan # CNYHLX000
                            </div>
                            <h2 className="ui center aligned header">
                            ¥100,000.00
                            </h2>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                        <div className="ui blue ribbon label">
                        Philippines Piso # PHPHLX000
                        </div>
                        <h2 className="ui center aligned header">
                        ₱790,000.00
                        </h2>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                        <div className="ui green ribbon label">
                        US Dollar # USDHLX000
                        </div>
                        <h2 className="ui center aligned header">
                        $500,001.49
                        </h2>
                        </div>
                    </div>
                </div>
                <div className="ui horizontal divider">
                Payroll Spreadsheet
                </div>
                <div className="ui center aligned yellow piled segment">
                <div className="ui grid">
                <div className="four wide column"></div>
                <div className="four wide column">
                <div className="ui message">
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                </div>
                </div>
                <div className="four wide column">
                <button className="ui big button">
                    <i className="paper plane icon"/>
                    Pay
                </button>
                </div>
                <div className="four wide column"></div>
                </div>

                
                
                </div>
                <Paytable/>
            </div>            
        );
    }

}

export default Payroll;