import React from 'react';

const Button=(props)=>{

	return(
			<button className="button"
			 style={{color:"white",backgroundColor:props.bg,border:"none",height:"100%",width:"100%",minHeight:"55px",minHidth:"55px",boxShadow:"3px 3px 5px 1px rgba(0,0,0,0.4)",cursor:"pointer"}}  
			 onClick={(e)=>props.isEntry==="1"? props.handleEntry(e): props.isEntry==="2"? props.deleteEntry(e):props.isEntry==="3"?props.evaluate(e) :props.clearEntries(e)}>{props.value}</button>
		)
}

export default Button;