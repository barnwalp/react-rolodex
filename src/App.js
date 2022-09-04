import React from 'react';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: true,
			monsters: [
				{
					name: 'first',
					id: 1,
				},
				{
					name: 'second',
					id: 2,
				},
				{
					name: 'three',
					id: 3,
				},
			],
		};
	}

	render() {
		if (this.state.loaded) {
			var rolodex = this.state.monsters.map((monster) => {
				return (
					<div key={monster.id}>
						<h2>{monster.name}</h2>
					</div>
				)
			})
		}
		return (
			<>
				<h1>App</h1>
				{rolodex}
			</>
		)
	}
}
