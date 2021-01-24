import React, { Component } from 'react'
import Tabs from './components/Tabs'
import I from "./components/icons/"
import {Drive} from "./components/Remotes"
import "./App.css"
export default class App extends Component {
  constructor(){
    super();
    this.state={URL:""}
  }

  render() {
    return (
      <div className="App">
        <Tabs tab={[
          {
            title:"drive",
            icon:I.drive,
            content:<Drive URL={this.state.URL}/>
          },

          {
            title:"vlc",
            icon:I.vlc,
            content:<div>
              <input className={"url"} onChange={(e)=>this.setState({url:e.target.value})} value={this.state.url}/>
              <button onClick={()=>localStorage.setItem("url",this.state.url)}>set</button>
            </div>
          },
          {
            title:"config",
            icon:I.config,
            content:<div className="flexrow">
                <input type={"text"} onChange={e=>{this.setState({URL:e.target.value})}} value={this.state.URL}/>
            </div>
          }
         
          ]}></Tabs>
      </div>
    )
  }
}
