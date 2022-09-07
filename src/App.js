import React from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
import './App.css';

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
		return (
			<>
				<h1 className='app-title'>Monster Rolodex</h1>
				<SearchBox 
					className="search-box"
					onChangehandler={this.handleChange}
					placeholder="Search Monsters"/>
				<CardList monsters={filteredMonsters}/>
			</>
		)
	}
}
