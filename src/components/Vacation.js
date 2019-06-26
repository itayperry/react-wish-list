import React from 'react';

function Vacation(props) {
	const style = props.item.isActive ? 
		{textDecoration: 'none'} : 
		{textDecoration: 'line-through'};

    return <h3 className="vacation_item" onClick={props.clickHandler} style={style}>{props.item.description}</h3>
}

export default Vacation;