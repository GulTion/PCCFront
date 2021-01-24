import React from "react"
import "./index.css"
import I from "../icons/"

const Alert = (props) =>{
  return <div className="Alert Alert-bad">
    <div>{props.data}</div><img onClick={()=>props.onClose()} src={I.close}/>
  </div>
}
export default Alert