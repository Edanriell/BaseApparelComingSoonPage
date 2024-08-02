import { FC } from "react";

export const Header: FC = () => {
	return (
		<header className="px-[3.2rem] mt-[3.1rem] mb-[3.2rem] desktop:px-[16.5rem] desktop:my-[6.5rem]">
			<img
				className="w-[10rem] h-[2.89rem] desktop:w-[15.8rem] desktop:h-[3.3rem]"
				src="/images/vector/logotype.svg"
				alt="Base Apparel company logotype"
			/>
		</header>
	);
};
