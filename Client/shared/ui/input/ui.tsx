import { FC, Fragment } from "react";

type InputProps = {
	placeholder: string;
	label: string;
	name: string;
	type: string;
	isInputInvalid?: boolean;
	[key: string]: unknown;
};

export const Input: FC<InputProps> = ({
	label,
	placeholder,
	name,
	type,
	isInputInvalid,
	...rest
}) => {
	const commonInputStyles =
		"w-full max-h-[4.8rem] font-josefinSans font-normal text-[1.4rem] leading-[200%] text-masala-900 placeholder:text-oriental-pink-400-05 pt-[1.1rem] pb-[0.9rem] pl-[2.4rem] pr-[11rem] bg-transparent rounded-[2.8rem] desktop:max-h-[5.6rem] desktop:pl-[3.2rem] desktop:pt-[1.5rem] desktop:pb-[1.3rem] desktop:pr-[16rem] desktop:text-[1.6rem] desktop:leading-[175%] ";
	const validInputStyles = commonInputStyles + "border border-solid border-oriental-pink-400";
	const invalidInputStyles =
		commonInputStyles + "border-[0.2rem] border-solid border-carnation-400";

	return (
		<Fragment>
			<label className="sr-only" htmlFor={name}>
				{label}
			</label>
			<input
				className={isInputInvalid ? invalidInputStyles : validInputStyles}
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				{...rest}
			/>
		</Fragment>
	);
};
