import React, { Component } from 'react'
import "./index.css"
import I from '../../icons/'


export default class index extends Component {
  constructor(props){
    super(props);
    this.state={
      number:1,
      URL:""
    }
  }
  componentDidMount(){
    this.setState({URL:this.props.URL})
  }

  sendRequest(type,how=1){
    fetch(`${this.state.URL}/${type}/${how}/`).then(res=>res.text()).then(e=>console.log(this.props.URL))
  }
    render() {
        return (
            <div className={"RemoteDrive"}>
              {/* list Btn */}
              <div className="flexrow">
                <div className={"btn"} onClick={e=>{this.sendRequest("list")}}>
                  <img src={I.list} alt={"list"}/>
                </div>
                <div className={"btn"} onClick={e=>{this.sendRequest("grid")}}>
                    <img src={I.grid} alt={"grid"}/>
                </div>
                </div>
                {/* mute */}
                

                <div className={"flexrow"}>
                  <div className={"btn"} onClick={e=>{this.sendRequest("up",this.state.number)}}>
                    <img src={I.up} alt={"up"}/>
                  </div>

                  <div className={"btn"} onClick={e=>{this.sendRequest("down",this.state.number)}}>
                    <img src={I.down} alt={"down"}/>
                  </div>
                </div>
                <div className={"btn"} onClick={e=>{this.sendRequest("mute",this.state.number)}}>
                  <img src={I.mute} alt={"mute"}/>
                </div>
                

                <div className={"btn"} onClick={e=>{this.sendRequest("fullscreen",this.state.number)}}>
                    <img src={I.fullscreen} alt={"fullscreen"}/>
                </div>

                <div className={"flexrow"}>
                  <div className={"btn"} onClick={e=>{this.sendRequest("left",this.state.number)}}><img src={I.left} alt={"left"}/></div>
                  <div className={"btn"} onClick={e=>{this.sendRequest("right",this.state.number)}}><img src={I.right} alt={"right"}/></div>
                </div>


                <div className={"flexrow"}>
                  <div className={"btn"} onClick={e=>{this.sendRequest("sort",this.state.number)}}><img src={I.sort} alt={"sort"}/></div>
                  <div className={"btn"} onClick={e=>{this.sendRequest("r_sort",this.state.number)}}><img src={I.r_sort} alt={"r_sort"}/></div>
                </div>
                
                <div className={"flexrow"}>
                  <div className={"btn"} onClick={e=>{this.sendRequest("play",this.state.number)}}><img src={I.play} alt={"play"}/></div>
                  <div className={"btn"} onClick={e=>{this.sendRequest("back",this.state.number)}}><img src={I.back} alt={"back"}/></div>
                </div>
          
                
                <div className={"flexrow"}>
                  <div className={"btn"} onClick={()=>{this.setState({number:this.state.number>0?this.state.number-1:0})}}><img src={I.minus} alt={"minus"}/></div>
                  <div className={"btn"}><img src={I[`_${this.state.number}`]} alt={`_${this.state.number}`}/></div>
                  <div className={"btn"} onClick={()=>{this.setState({number:this.state.number<9?this.state.number+1:9})}}><img src={I.add} alt={"add"}/></div>
                </div>

                <div className={"btn"} onClick={e=>{this.sendRequest("enter",this.state.number)}}><img src={I.enter} alt={"enter"}/></div>
                <div className={"btn"} onClick={e=>{this.sendRequest("speed",this.state.number)}}><img src={I.speed} alt={"speed"}/></div>
                <div className={"btn"} onClick={e=>{this.sendRequest("q",this.state.number)}}><img src={I.q} alt={"q"}/></div>
                <div className={"btn"} onClick={e=>{this.sendRequest("esc",this.state.number)}}><img src={I.esc} alt={"esc"}/></div>


            </div>
        )
    }
}
