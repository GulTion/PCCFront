import React, { Component } from 'react'
import "./index.css"
import I from '../../icons/'

export default class index extends Component {
    render() {
        return (
            <div className={"RemoteDrive"}>
                <div className={"btn"}>
                </div>
                <div className={"btn"}></div>

                <div className={"flexrow"}>
                  <div className={"btn"}>
                  <img src={I.up} alt={"up"}/>
                 
                  </div>
                  <div className={"btn"}> <img src={I.down} alt={"down"}/></div>
                </div>
                
                <div className={"btn"}></div>
                <div className={"btn"}></div>

                <div className={"flexrow"}>
                  <div className={"btn"}><img src={I.left} alt={"left"}/></div>
                  <div className={"btn"}><img src={I.right} alt={"right"}/></div>
                </div>
                
                <div className={"btn"}></div>
                <div className={"btn"}></div>
                <div className={"btn"}></div>
                <div className={"btn"}></div>
                <div className={"btn"}></div>
                <div className={"btn"}></div>
                <div className={"btn"}></div>
                <div className={"btn"}></div>
                <div className={"btn"}></div>
                <div className={"btn"}></div>
                <div className={"btn"}></div>
                <div className={"btn"}></div>
                <div className={"btn"}></div>
                <div className={"btn"}></div>
                <div className={"btn"}></div>
            </div>
        )
    }
}
