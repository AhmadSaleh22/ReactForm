import React, { Component } from 'react'
import arrow from './arrow.svg'
import Google from './Google.svg'
import Left from '../Login/Left'
export default class Right extends Component {
    state={
        renderA : false
    }
    handleClick = (event) => {
        this.setState((prevState) => ({renderA: !prevState.renderA}));
    };
    render() {
        return (
            <div className="right">
                <div className="container">
                    <span><img src={arrow} className="arrow"/> <span className="back">Back</span></span>
                    <div className="allform">
                        <h2>Register Individual Account!</h2>
                        <p>For the purpose of gamers regulation,<br/> your details are required.</p>
                        <form action={this.state.secondPage} method="post">
                        <label htmlFor="email">Email Address*</label><br/>
                            <input type="text" id="email" name="Email" placeholder="Enter Email Address" required/><br/>
                            <label htmlFor="pass">Create password*</label><br/>
                            <input type="password" id="pass" name="pass" placeholder="Create Password" required/><br/>
                            <label htmlFor="repass">Email Address*</label><br/>
                            <input type="password" id="repass" name="repass" placeholder="Repeat Password" required/><br/>
                            <input type="checkbox" id="agree" name="agree" value="yes"></input>
                            <label for="agree">I agree to terms & conditions</label><br></br>
                            <button className="regbtn">Register Account</button>
                        </form>
                        <button className="btngoogle"><img src={Google} /> <span>Register with Google</span></button>
                        </div>
                </div>
            </div>
        )
    }
}
