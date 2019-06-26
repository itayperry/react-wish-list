import React from 'react';
import AddVacation from './AddVacation'
import Vacations from './Vacations'
import VacationsFilters from './VacationsFilters'
import WishListHeader from './WishListHeader'
import './WishList.css'

class WishList extends React.Component {
	state = {
		vacations: [
			{description: 'Rome', isActive: true},
			{description: 'London', isActive: false},
			{description: 'Vienna', isActive: true}
		], 
		listFilterIndex: 0
	};

	filterLogic = ['All', 'Active', 'Completed'];

	addVacation = (desc) => {
		let tmpVacations = [...this.state.vacations];
		tmpVacations.push({description: desc, isActive: true})
		this.setState({vacations: tmpVacations, listFilterIndex: 0});
	}

	isActiveHandler = (index) => {
		let tmpVacations = [...this.state.vacations];
		tmpVacations[index].isActive = !tmpVacations[index].isActive;
		this.setState({vacations: tmpVacations});
	}

	changeFilterIndex = (index) => this.setState({listFilterIndex: index});

	render() {
		return (
			<div className='container'>
				<WishListHeader/>
				<main>
					<AddVacation 
						addVacationFunc={this.addVacation} 
					/>
					<Vacations 
						vacationsList={this.state.vacations}
						logic={this.filterLogic}
						filterIndex={this.state.listFilterIndex}
						toggleIsActiveHandler = {this.isActiveHandler}
					/>
					<VacationsFilters 
						logic={this.filterLogic} 
						changeFilter = {this.changeFilterIndex}
					/>
				</main>
			</div>
		)
	}

}

export default WishList;