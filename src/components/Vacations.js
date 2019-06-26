import React from 'react';
import Vacation from './Vacation'

function Vacations(props) {
	const showItem = (chosenOption,item,optionsList) =>{
        let render;
        switch(chosenOption) 
        {
            case optionsList[0]: //All
            render = true;
            break;
    
            case optionsList[1]: //Active
            render = item.isActive;
            break;
    
            case optionsList[2]: //Completed
            render = !item.isActive;
            break;
    
            default:
            render = false;
        }

        return render;
    }

    const currentFilter = props.logic[props.filterIndex];

	const elements = props.vacationsList.map((item, index) => {
		return showItem (currentFilter, item, props.logic) && <Vacation 
				clickHandler={() => props.toggleIsActiveHandler(index)} 
				key={index} 
				item={item} 
			/>
	})
	return <div>{elements}</div>
}

export default Vacations;