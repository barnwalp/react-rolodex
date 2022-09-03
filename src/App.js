import React from 'react'
import ReactDom from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: "Yes",
		};
	}
	
	// Here only arrow function work, else it will throw error "can not read property of undefined" as An arrow function does not have its own this; the this value of the enclosing execution context is used. 
	handleClick = () => {
		this.setState({toggle: "No"});
	}

	// handleClick() {
	// 	this.setState((prevData) => {
	// 		return({
	// 			...prevData,
	// 			name: 'sobhita',
	// 		});
	// 	});
	// }

	render() {
		return (
			<>
				<h2>React App</h2>
				<p>My name is {this.state.toggle} and my job is {this.state.toggle}</p>
				<button onClick={() => {this.setState({toggle: "No"})}}>Change Name</button>
				<button onClick={this.handleClick}>Change Name</button>
				{/*}
				<button onClick={() => {
					this.setState(
						(prevData) => {
							return{
								...prevData,
								name: 'sobhita'
							}
						}
					)
				}}>
					Change Name
				</button>
				{*/}
			</>
		);
	}
}

export default App;
