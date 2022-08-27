import React, {useState} from "react";
import styles from './styles.css';

const Input = (props) => {
const { placeholder, type, onChange, isRightLogo = false } = props;
const [value, setValue] = useState('');
const onValueChange= (e) => {
	setValue(e.target.value);
	onChange(e.target.value, type);
};

return (
    <div className={`inputWrapper  ${isRightLogo && 'rightLogoInputWrapper'}`}>
			{!isRightLogo && type &&  (
				<div class={`iconWrapper ${type} leftLogo`} />
			)}
			<input
				class="input"
				placeholder={placeholder}
				value={value}
				onChange={onValueChange}
				type={((type === 'number' || type === 'password') && type) || 'text'}
			/>
				{isRightLogo && type &&  (
				<div class={`iconWrapper ${type} rightLogo`} />
			)}
    </div>
);
};
export default Input;