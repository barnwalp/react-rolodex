import React from 'react';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			monsters: [],
		};
	}

	async componentDidMount() {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await response.json();
		console.log(data);
		this.setState(() => {
			return ({
				loaded: true,
				monsters: data,
			})
		})
	}

	render() {
		var rolodex = this.state.monsters.map((monster) => {
			return (
				<div key={monster.id}>
					<h2>{monster.name}</h2>
				</div>
			)
		})
		return (
			<>
				<h1>App</h1>
				{rolodex}
			</>
		)
	}
}
