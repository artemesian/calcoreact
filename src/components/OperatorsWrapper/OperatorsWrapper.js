import React from 'react';
import Button from '../Button/Button.js';
import './OperatorsWrapper.css';

const OperatorsWrapper=(props)=>{
	const operators={
		"/":"#5563ED", 
		"*":"#5563ED",
		"-":"#5563ED",
		"+":"#5563ED",
		}
	const customizedOperators=Object.keys(operators).map((val,i)=>{
		return <Button value={val} bg={operators[val]} handleEntry={props.handleEntry} isEntry="1" key={val+i}/>
	})
	return(
			<div id="operators-wrapper">{customizedOperators}</div> 
		)
}

export default OperatorsWrapper;