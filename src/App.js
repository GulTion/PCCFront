import React, { Component } from 'react'
import Tabs from './components/Tabs'
import I from "./components/icons/"
import {Drive} from "./components/Remotes"
import "./App.css"
import {motion} from "framer"

import Alert from  "./components/Alert/"

export default class App extends Component {
  constructor(){
    super();
    this.state={
      URL:"",
      isAlert:true
      }
  }

  render() {
    const {URL, isAlert} = this.state
    return (
      <div className="App">
          {this.state.isAlert&&<Alert data={this.state.URL} onClose={()=>this.setState({isAlert:false})}/>}
        <Tabs tab={[
          {
            title:"drive",
            icon:I.drive,
            content:<Drive URL={URL}/>
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
          },
          {
            title:"mouse",
            icon:I.mouse,
            content:<div className={"pad"}><motion.div 
            drag 
            dragMomentum={true}
            dragElastic={0.01}
            className={"move"}
            ></motion.div></div>
          }
         
          ]}></Tabs>
      </div>
    )
  }
}
