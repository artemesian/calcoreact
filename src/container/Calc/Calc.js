import React,{Component}from 'react';
import OutputZone from '../../components/OutputZone/OutputZone.js';
import Options from '../../components/Options/Options.js';
import DigitsWrapper from '../../components/DigitsWrapper/DigitsWrapper.js';
import OperatorsWrapper from '../../components/OperatorsWrapper/OperatorsWrapper.js';
import "./Calc.css";

const initialState="";

class Calc extends Component{
	constructor(){
		super()
		this.state={
			result:""
		}
	}
	handleEntry=(e)=>{
		let	entry=e.target.innerText;
		let prevEntry=this.state.result;
		this.setState({result:(prevEntry+entry)})
	}
	clearEntries=()=>{
		this.setState({result:initialState})
	}
	deleteEntry=()=>{
		this.setState({result:this.state.result.slice(0,-1)})
		
	}
	evaluate=()=>{
		let prevEntry=this.state.result;
		try{
			let finalResult=(eval(prevEntry) || "" ) + "";
			this.setState({result:finalResult})
		}catch(e){
			let finalResult="Error!"
			this.setState({result:finalResult})
		}
		}
	render(){

		return(
				<div id="calc-wrapper">
					<header>First Calcultor</header>
					<OutputZone result={this.state.result}/>
					<Options  handleEntry={this.handleEntry} clearEntries={this.clearEntries} deleteEntry={this.deleteEntry}/>
					<div id="digits-operator-wrapper">
						<DigitsWrapper handleEntry={this.handleEntry} evaluate={this.evaluate}/>
						<OperatorsWrapper  handleEntry={this.handleEntry}/>
					</div>	
					<footer>By Angelo</footer>
				</div>
			)

	}
}
export default Calc;