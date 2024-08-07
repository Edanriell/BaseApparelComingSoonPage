import { FC } from "react";

type SpinnerProps = {
	width?: number;
	height?: number;
	[key: string]: unknown;
};

export const Spinner: FC<SpinnerProps> = ({ width = 50, height = 50, ...rest }) => {
	return (
		<img
			src="public/images/vector/spinner.svg"
			width={width}
			height={height}
			alt="Loading"
			{...rest}
		/>
	);
};
