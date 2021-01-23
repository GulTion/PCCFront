import React, { Component } from 'react'
import Tabs from './components/Tabs'
import I from "./components/icons/"
import {Drive} from "./components/Remotes"
import "./App.css"
export default class App extends Component {
  constructor(){
    super();
    this.state={}
  }

  render() {
    return (
      <div className="App">
        <Tabs tab={[
          {
            title:"drive",
            icon:I.drive,
            content:<div><h1>Drive</h1></div>
          },

          {
            title:"vlc",
            icon:I.vlc,
            content:<div><h1>VLC</h1></div>
          }
         
          ]}></Tabs>
      </div>
    )
  }
}
