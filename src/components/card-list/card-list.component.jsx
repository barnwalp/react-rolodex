import React from 'react';


export default class CardList extends React.Component {
	render() {
		console.log('render');
		return (
			<>
				{this.props.monsters.map((monster) => {
					return (
						<div key={monster.id}>
							<h2>{monster.name}</h2>
						</div>
					)
				})}
			</>
		);
	};
};
