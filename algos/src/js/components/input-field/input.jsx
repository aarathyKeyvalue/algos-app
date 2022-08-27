import React, { useState, useEffect } from "react";
import './styles.css';

const Input = (props) => {
	const {
		placeholder,
		type,
		onChange,
		isRightLogo = false,
		onFocus,
		val
	} = props;
	const newDate = new Date();

	useEffect(() => {
		setValue(val);
	}, [val]);
	const formatDate = (date) => {
		const monthString = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date)?.substring(0, 3);
		let newDateString = `${date?.getDay()}/${monthString}/${date.getFullYear()} `;
		return newDateString;

	};
	const [value, setValue] = useState(type === 'date' ? formatDate(newDate) : '');
	const onValueChange = (e) => {
		// if (type !== 'date') setValue(e.target.value);
		onChange(e.target.value, type);
	};
	const getInputType = () => {
		switch (type) {
			case 'number':
			case 'password':
				return type;
			case 'weight':
				return 'number'
			default:
				return 'text';
		};
	};

	return (
		<div className={`inputWrapper  ${isRightLogo && 'rightLogoInputWrapper'}`}>
			{!isRightLogo && type && (
				<div class={`iconWrapper ${type} leftLogo`} />
			)}
			<input
				class="input"
				placeholder={placeholder}
				value={value}
				onChange={onValueChange}
				type={getInputType()}
        onFocus={onFocus}
			/>
			{isRightLogo && type && (
				<div class={`iconWrapper ${type} rightLogo`} />
			)}
      {type === 'weight' && (
        <span className="weightUnit">Kg</span>
      )}
		</div>
	);
};
export default Input;