import React, { useState, useEffect } from "react";
import './styles.css';

const ToggleButton = (props) => {
	const { list, selected, setSelected } = props;
	return (
		<div className="wrapperDiv">
			{list.map((item) => (
				<div
				  className={`${(item?.id === selected && 'selected') || 'inactive'} eachItem`}
					onClick={() => setSelected(item?.id)}
					role="presentation"
				>
					{item?.name}
				</div>
			))}
		</div>
	)
}

export default ToggleButton;