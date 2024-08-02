import { FC } from "react";

import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";

export const Form: FC = () => (
	<form className="relative" method="POST">
		<div className="relative desktop:max-w-[45.5rem]">
			<Input
				label="Customer email address"
				placeholder="Email Address"
				name="customer-email"
				type="email"
			/>
			<Button>
				<img className="w-[1.2rem] h-[2rem]" src="/images/vector/icons/arrow-right.svg" alt="" />
				<span className="sr-only">Send data</span>
			</Button>
		</div>
	</form>
);
