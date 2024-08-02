import { FC, Fragment } from "react";

type InputProps = {
	placeholder: string;
	label: string;
	name: string;
	type: string;
};

export const Input: FC<InputProps> = ({ label, placeholder, name, type }) => (
	<Fragment>
		<label className="sr-only" htmlFor={name}>
			{label}
		</label>
		<input
			className="w-full max-h-[4.8rem] font-josefinSans font-normal text-[1.4rem] leading-[200%] text-masala-900 placeholder:text-oriental-pink-400-05 pt-[1.1rem] pb-[0.9rem] pl-[2.4rem] pr-[6.4rem] bg-transparent rounded-[2.8rem] border border-solid border-oriental-pink-400 desktop:max-h-[5.6rem] desktop:pl-[3.2rem] desktop:pt-[1.5rem] desktop:pb-[1.3rem] desktop:pr-[13.2rem] desktop:text-[1.6rem] desktop:leading-[175%]"
			id={name}
			name={name}
			type={type}
			placeholder={placeholder}
		/>
	</Fragment>
);
