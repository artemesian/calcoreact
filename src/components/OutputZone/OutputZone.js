import React from 'react';
import "./OutputZone.css";

const OutputZone=(props)=>{

	return(
			<div id="output-zone">{props.result}</div> 
		)
}

export default OutputZone;