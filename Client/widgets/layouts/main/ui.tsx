import { FC, ReactNode } from "react";

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return <main className={"w-full min-h-[100vh] bg-coy-gradient"}>{children}</main>;
};
