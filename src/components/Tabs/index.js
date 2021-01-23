import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    constructor(){
        super();
        this.state = {
            tab:0
        }

    }

    

    render() {
        const Tab=(props)=>{
            return <div className={`Tab ${!props.isActive?"Tab-unactive":""}`} onClick={(e)=>props.onClick(e.target.id)}>
                <img src={props.icon} alt={props.title}/>
                {!props.isActive&&<div className="Title">{props.title}</div>}
                </div>
        }
        const {tab} = this.state
        return (
            <div className="Tabs">
            <div className={"TabWrapper"}>{this.props.tab&&this.props.tab.map((e,i)=>{
                    return <Tab icon={e.icon} isActive={tab==i} key={i} id={e.title} title={e.title} onClick={(e)=>this.setState({tab:i})}/>
                })}</div>
                <div className={"Content"}>{this.props.tab[tab].content}</div>
                
            </div>
        )
    }
}


