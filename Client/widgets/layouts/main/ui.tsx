import { FC, Fragment, ReactNode } from "react";

import { Header } from "@widgets/header";

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<Fragment>
			<Header />
			<main className={"w-full min-h-[100vh]"}>{children}</main>
		</Fragment>
	);
};
