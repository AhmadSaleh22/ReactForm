import React, { Component } from 'react'
import logo from '../../logo.svg'
import Text from '../Text/Text'
import end from './end.svg'
import './style.css'
export default class Left extends Component {
    state={
        Auth : 'Hideo Kojima',
        Text : `I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.`
    };
    render() {
        return (
            <div className="Left">
                <div className="overlay">
                    <div className="container">
                        <img src={logo} className="logo"/>
                        <Text String={this.state.Text} author={this.state.Auth}/>
                        <img src={end} className="end"/>
                    </div>
                </div>
            </div>
        )
    }
}
