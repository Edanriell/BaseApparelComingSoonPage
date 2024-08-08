import "./styles.less";

import { FC, ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
	[key: string]: unknown;
};

export const Button: FC<ButtonProps> = ({ children, ...rest }) => (
	<button
		className="button-animations pt-[1.5rem] pb-[1.533rem] pl-[2.8rem] pr-[2.716rem] max-h-[4.8rem] rounded-[2.8rem] shadow-buttonShadow absolute top-0 right-0 desktop:max-h-[5.6rem] desktop:pl-[4.6rem] desktop:pr-[4.516rem] desktop:pt-[1.9rem] desktop:pb-[1.933rem] transform-gpu hover:scale-[1.2] active:scale-[1] focus:scale-[1.2]"
		type="submit"
		{...rest}
	>
		{children}
	</button>
);
