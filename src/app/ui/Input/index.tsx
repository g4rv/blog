import { FC, InputHTMLAttributes } from 'react';

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({...props}) => {
	return <input type="text" {...props}/>;
};
export default Input;
