import React from 'react';


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
