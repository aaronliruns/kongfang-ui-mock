import React from 'react';

const Signup = () => (
    <div className="container"> 
    <h1>Register Now</h1>

    <div className="ui form segment">   
        <div className="two fields">
            <div className="field">
                <label htmlFor="GivenName">Given Name</label>
                <input id="GivenName" placeholder="Given Name" type="text" />
            </div>

            <div className="field">
                <label htmlFor="Surname">Surname</label>
                <input id="Surname" placeholder="Surname" type="text"/>
            </div>
        </div>

        <div className="inline fields">
            <label htmlFor="gender">Select your gender:</label>
            <div className="field">
            <div className="ui radio checkbox">
                <input readOnly type="radio" name="gender" checked/>
                <label>Male</label>
            </div>
            </div>
            <div className="field">
            <div className="ui radio checkbox">
                <input readOnly type="radio" name="gender"/>
                <label>Female</label>
            </div>
            </div>
        </div>

        <div className="field">
        <label htmlFor="Phone">Cell Phone</label>
        <input id="Phone" placeholder="e.g.,09xxxxxxxxx" type="text"/>
        </div>

        <div className="field">
        <label htmlFor="Username">Username</label>
        <input id="Username" placeholder="Username" type="text" />
        </div>

        <div className="field">
        <label htmlFor="Password">Password</label>
        <input id="Password" type="password" />
        </div>

        <div className="field">
        <label htmlFor="PasswordConfirm">Password Confirm</label>
        <input id="PasswordConfirm" type="password"/>
        </div>

        <div className="field">
        <label htmlFor="CompanyCode">Company Code</label>
        <input id="CompanyCode" placeholder="Company Code" type="text" />
        </div>

        <button className="ui red button">Submit</button>
    </div>    
    </div>
);

export default Signup;