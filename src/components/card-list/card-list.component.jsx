import React from 'react';
import './card-list.styles.css';
import './card.styles.css';


export default class CardList extends React.Component {
	render() {
		return (
			<div className="card-list">
				{this.props.monsters.map((monster) => {
					// destructuring is done to optimize code
					const { name, email, id } = monster;
					return (
						<div 
							key={id}
							className="card-container"	
						>
							<img 
								src={`https://robohash.org/${id}set=set2&size=180x180`} 
								alt={name} 
							/>
							<h2>{name}</h2>
							<p>{email}</p>
						</div>
					)
				})}
			</div>
		);
	};
};
