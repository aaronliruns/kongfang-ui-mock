import React from 'react';
const CnyPhpRatesGrid = () => (
    <div>
    <div className="ui raised centered card">
        <div className="content">
            <div className="center aligned meta">
            <span className="category">Sell Chinese Yuan/Buy Philippines Peso</span>
            </div>
            <div className="center aligned header">
            <h2>7.90</h2>
            </div>
            <div className="center aligned meta">
            <span className="category">Peso that 1 Yuan can get</span>
            </div>
        </div>
        <div className="extra content">
        <div className="center aligned header">
            <i className="china flag"/>
            <i className="angle right icon"></i>
            <i className="philippines flag"/>
        </div>
        </div>
    </div>
    <div className="ui raised centered card">
        <div className="content">
            <div className="center aligned meta">
            <span className="category">Sell Philippines Peso/Buy Chinese Yuan</span>
            </div>
            <div className="center aligned header">
            <h2>0.13</h2>
            </div>
            <div className="center aligned meta">
            <span className="category">Yuan that 1 Peso can get</span>
            </div>
        </div>
        <div className="extra content">
        <div className="center aligned header">
            <i className="philippines flag"/>
            <i className="angle right icon"></i>
            <i className="china flag"/>
        </div>
        </div>
    </div>
    </div>
);

export default CnyPhpRatesGrid;