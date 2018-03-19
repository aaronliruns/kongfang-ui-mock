import React from 'react';

const Signup = () => (
    <div className="container"> 
    <h1>Register Now</h1>

    <div className="ui form segment">   
        <div className="field">
            <label htmlFor="Fullname">Full Name</label>
            <input id="Fullname" placeholder="Full Name" type="text" />
        </div>

        <div className="inline fields">
            <label htmlFor="gender">Gender</label>
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
        <input id="CompanyCode" placeholder="Company Code (Optional)" type="text" />
        </div>

        <button className="ui red button">Submit</button>
    </div>    
    </div>
);

export default Signup;