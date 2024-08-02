import { FC, ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ children }) => (
	<button
		className="pt-[1.5rem] pb-[1.533rem] pl-[2.8rem] pr-[2.716rem] max-h-[4.8rem] rounded-[2.8rem] shadow-buttonShadow bg-buttonGradient absolute top-0 right-0 desktop:max-h-[5.6rem] desktop:pl-[4.6rem] desktop:pr-[4.516rem] desktop:pt-[1.9rem] desktop:pb-[1.933rem]"
		type="submit"
	>
		{children}
	</button>
);
