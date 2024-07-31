import { FC } from "react";

export const Header: FC = () => {
	return (
		<header className="ml-[3.2rem] mr-[3.2rem] pt-[3.1rem] pb-[3.2rem] desktop:ml-[16.5rem] desktop:mr-[16.5rem] desktop:pt-[6.5rem] desktop:pb-[6.5rem]">
			<img
				className="w-[10rem] h-[2.89rem] desktop:w-[15.8rem] desktop:h-[3.3rem]"
				src="/images/vector/logotype.svg"
				alt="Base Apparel company logotype"
			/>
		</header>
	);
};
