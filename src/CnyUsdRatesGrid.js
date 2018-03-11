import React from 'react';
const CnyUsdRatesGrid = () => (
    <div>
    <div className="ui raised centered card">
        <div className="content">
            <div className="center aligned meta">
            <span className="category">Sell Chinese Yuan/Buy US Dollars</span>
            </div>
            <div className="center aligned header">
            <h2>0.16</h2>
            </div>
            <div className="center aligned meta">
            <span className="category">USD that 1 Yuan can get</span>
            </div>
        </div>
        <div className="extra content">
        <div className="center aligned header">
            <i className="china flag"/>
            <i className="angle right icon"></i>
            <i className="us flag"/>
        </div>
        </div>
    </div>
    <div className="ui raised centered card">
        <div className="content">
            <div className="center aligned meta">
            <span className="category">Sell US Dollars/Buy Chinese Yuan</span>
            </div>
            <div className="center aligned header">
            <h2>6.40</h2>
            </div>
            <div className="center aligned meta">
            <span className="category">Yuan that 1 USD can get</span>
            </div>
        </div>
        <div className="extra content">
        <div className="center aligned header">
            <i className="us flag"/>
            <i className="angle right icon"></i>
            <i className="china flag"/>
        </div>
        </div>
    </div>
    </div>

);

export default CnyUsdRatesGrid;