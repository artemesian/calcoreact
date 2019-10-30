import React from 'react';
import Button from '../Button/Button.js';
import './DigitsWrapper.css';

const DigitsWrapper=(props)=>{
	const digits=[9,8,7,6,5,4,3,2,1,"=",'.',0]
	const customizedDigits=digits.map((val,i)=>{
		if(i===digits.length-3){
			return <Button value={val} bg="black"  evaluate={props.evaluate} isEntry="3" key={val}/>
		}
		return <Button value={val} bg="#5563ED" handleEntry={props.handleEntry} isEntry="1" key={val}/>
	})
	return(
			<div id="digits-wrapper">{customizedDigits}</div> 
		)
}

export default DigitsWrapper;