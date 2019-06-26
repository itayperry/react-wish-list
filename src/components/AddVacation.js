import React, { Component } from 'react';

class AddVacation extends Component {
	state = {vacationDesc: ''}

	handleChange = event => {
		this.setState({vacationDesc: event.target.value});
	} 

	handleSubmit = event => {
		event.preventDefault(event);
		this.props.addVacationFunc(this.state.vacationDesc);
		this.setState({vacationDesc: ''});
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					<input
						placeholder="add a destination.."
						value={this.state.vacationDesc}
						type="text"
						onChange={this.handleChange}
						required
					/>
				</label>
				<input 
					type="submit"
					value="Add"
				/>
			</form>
		)
	}
}

export default AddVacation;