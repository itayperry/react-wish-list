import React from 'react'

function VacationsFilter(props) {
	return (<button onClick={props.clickHandler} >{props.text}</button>)
}

export default VacationsFilter;