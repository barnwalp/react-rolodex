import React from 'react'
import ReactDom from 'react-dom';

class SimpleState extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Taanya',
			job: 'developer',
			likeReact: "Yes",
		};
	}
	
	// Here only arrow function work, else it will throw error "can not read property of undefined" as An arrow function does not have its own this; the this value of the enclosing execution context is used. 
	changeJob = () => {
		this.setState({job: "Fashionista"});
	}
	
	// same thing can be implemented by passing a callback function to setState with old state as it's parameter
	toggleFlag = () => {
		this.setState(prevData => {
			let flag = (prevData.likeReact === "Yes") ? "No": "Yes";
			return({
				...prevData,
				likeReact: flag,
			});
		});
	}

	render() {
		return (
			<>
				<h2>React SimpleState</h2>
				<p>My name is {this.state.name}</p>
				<p>my job is {this.state.job}</p>
				<p>I like React: {this.state.likeReact}</p>
				<button onClick={() => {this.setState({name: "Shobhita"})}}>Change Name</button>
				<button onClick={this.changeJob}>Change Job</button>
				<button onClick={this.toggleFlag}>React</button>
			</>
		);
	};
}

export default SimpleState;
