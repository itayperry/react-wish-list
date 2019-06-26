import React from 'react'
import VacationsFilter from './VacationsFilter.js'

function VacationsFilters(props) {
	const buttons = props.logic.map((item, index) => {
		return <VacationsFilter 
					key={index} 
					text={item} 
					logicIndex={index} 
					clickHandler={() => props.changeFilter(index)}
				/>
	});
	return (<div className="btns_container" >{buttons}</div>)
}

export default VacationsFilters;