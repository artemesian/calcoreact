import React from 'react';
import Button from '../Button/Button.js';
import "./Options.css";

const Options=(props)=>{
	const Options={
		"CE":"black",
		"(":"#5563ED",
		")":"#5563ED",
		"DEL":"rgba(255,0,0,0.8)"
	}
	const customizedOption=Object.keys(Options).map((val,i)=>{
		if (i===0) {
		return <Button value={val} bg={Options[val]} clearEntries={props.clearEntries} isEntry="0" key={val+i}/>
	}
	if (i===3) {
		return <Button value={val} bg={Options[val]} deleteEntry={props.deleteEntry} isEntry="2" key={val+i}/>
	}
	return <Button value={val} bg={Options[val]} handleEntry={props.handleEntry} isEntry="1" key={val+i}/>
	})
	return(
			<div id="options-wrapper">{customizedOption}</div> 
		)
}

export default Options;