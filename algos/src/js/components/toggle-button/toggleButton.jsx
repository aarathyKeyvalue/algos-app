import React, { useState, useEffect } from "react";
import './styles.css';

const ToggleButton = (props) => {
	const { list, selectedVal } = props;

	const [selected, setSelected] = useState(selectedVal);

	useEffect(() => {
		setSelected(selectedVal);
	}, [selectedVal]);
	return (
		<div className="wrapperDiv">
			{list.map((item) => (
				<div className={`${(item?.id === selected && 'selected') || 'inactive'} eachItem`}>{item?.name}</div>
			))}
		</div>
	)
}

export default ToggleButton;