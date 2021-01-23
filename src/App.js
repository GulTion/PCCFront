import React, { Component } from 'react'
import Tabs from './components/Tabs'
import I from "./components/icons/"
import {Drive} from "./components/Remotes"
import "./App.css"
export default class App extends Component {
  constructor(){
    super();
    this.state={url:""}
  }

  render() {
    return (
      <div className="App">
        <Tabs tab={[
          {
            title:"drive",
            icon:I.drive,
            content:<Drive />
          },

          {
            title:"vlc",
            icon:I.vlc,
            content:<div>
              <input className={"url"} onChange={(e)=>this.setState({url:e.target.value})} value={this.state.url}/>
              <button onClick={()=>localStorage.setItem("url",this.state.url)}>set</button>
            </div>
          }
         
          ]}></Tabs>
      </div>
    )
  }
}
