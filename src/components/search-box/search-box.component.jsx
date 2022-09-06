import React from 'react';
import './search-box.style.css';


export default class SearchBox extends React.Component {
	render() {
		return (
			<>
				<input 
					className={this.props.className}
					type="search" 
					placeholder={this.props.placeholder} 
					onChange={this.props.onChangehandler}
				/>
			</>
		);
	};
};
