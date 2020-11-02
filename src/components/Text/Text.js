import React from 'react'
import qoute from './qoute.svg'
import Theme from './Theme.svg'
import './Text.css'
export default function Text(props) {
    return (
        <div className="text">
            <img src={Theme} className="theme"/>
            <div className="cont">
                <img src={qoute} className="Qoute"/>
                <p className="string">{props.String}</p>
                <p className="author">{props.author}</p>
            </div>
        </div>
    )
}
