import React from 'react';
import './card-list.styles.css';
import Card from '../card/card.component.jsx';


export default class CardList extends React.Component {
	render() {
		return (
			<div className="card-list">
			{this.props.monsters.map((monster) => {
				return (
					<Card monster={monster} />
				)
			})}
			</div>
		);
	};
};
