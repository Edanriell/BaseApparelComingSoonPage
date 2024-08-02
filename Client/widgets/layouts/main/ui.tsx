import { FC, Fragment, ReactNode } from "react";

import { Header } from "@widgets/header";

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<Fragment>
			<svg
				className="hidden absolute top-0 left-0 -z-10 desktop:block"
				width="788"
				height="800"
				viewBox="0 0 788 800"
				preserveAspectRatio="none"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M788 -10C788 -10 715.164 267.487 432.527 339.737C149.889 411.988 0 790 0 790V-10H788Z"
					fill="url(#paint0_linear_0_162)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_0_162"
						x1="412.54"
						y1="1120.41"
						x2="1114.22"
						y2="336.994"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#FFF1F1" />
						<stop offset="1" stopColor="white" />
					</linearGradient>
				</defs>
			</svg>
			<Header />
			<main className={"w-full"}>{children}</main>
		</Fragment>
	);
};
