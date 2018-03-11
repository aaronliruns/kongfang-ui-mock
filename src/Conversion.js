import React from 'react';

const Conversion = () => (
    <form className="ui form">
        <div className="ui raised centered card">
            <div className="content">
                <div className="center aligned header">Conversion</div>
                <div className="center aligned description">
                    <div className="field">
                        <label>From</label>
                        <div className="ui selection dropdown">
                            <input type="hidden" name="gender"/>
                            <i className="dropdown icon"></i>
                            <div className="default text">Currency</div>
                            <div className="menu">
                                <div className="item" data-value="1">Male</div>
                                <div className="item" data-value="0">Female</div>
                            </div>
                        </div>
                        <input type="text" name="amount" placeholder="0.00"/>
                    </div>
                    <div className="field">
                        <label>To</label>
                        <div className="ui selection dropdown">
                            <input type="hidden" name="gender"/>
                            <i className="dropdown icon"></i>
                            <div className="default text">Currency</div>
                            <div className="menu">
                                <div className="item" data-value="1">Male</div>
                                <div className="item" data-value="0">Female</div>
                            </div>
                        </div>
                        <input type="text" name="amount" placeholder="0.00"/>
                    </div>
                </div>
            </div>
            <div className="extra content">
                <div className="center aligned author">
                    <button className="ui labeled icon button" type="submit">
                        <i className="paper plane icon"></i>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </form>
);

export default Conversion;