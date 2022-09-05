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
				searchString: "",
			})
		})
	}

	handleChange = (event) => {
		this.setState((monsters) => {
			return({
				...monsters,
				searchString: event.target.value,
			});
		});
	}

	render() {
		const filteredMonsters = this.state.monsters.filter((monster) => {return monster.name.toLowerCase().includes(this.state.searchString)});

		var rolodex = filteredMonsters.map((monster) => {
			return (
				<div key={monster.id}>
					<h2>{monster.name}</h2>
				</div>
			)
		})
		return (
			<>
				<h1>Monster Rolodex</h1>
				<input type="search" placeholder="Search Monsters" onChange={this.handleChange}/>
				{rolodex}
			</>
		)
	}
}
