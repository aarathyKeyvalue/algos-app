import React, {useState} from "react";
import styles from './styles.css';

const Input = (props) => {
const { placeholder, type, initialValue, onChange, isRightLogo = false } = props;
const [value, setValue] = useState(initialValue);
const onValueChange= (e) => {
	setValue(e.target.value);
	onChange(e.target.value);
};

return (
    <div className="inputWrapper">
			{!isRightLogo && type &&  (
				<div class={`iconWrapper ${type}`} />
			)}
			<input
				class="input"
				placeholder={placeholder}
				value={value}
				onChange={onValueChange}
			/>
    </div>
);
};
export default Input;