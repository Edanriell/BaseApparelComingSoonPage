import { ChangeEvent, FC, FormEvent, useState } from "react";

import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import { validateEmail } from "@features/email-form/model";

export const EmailForm: FC = () => {
	const [formSubmission, setFormSubmission] = useState<"idle" | "unSubmitted" | "submitted">(
		"idle"
	);
	const [userEmail, setUserEmail] = useState<string | null>(null);
	const [userEmailValidness, setUserEmailValidness] = useState<"valid" | "invalid" | "unknown">(
		"unknown"
	);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (userEmailValidness === "invalid") return;
	};

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUserEmail(event.target.value);

		if (!validateEmail((userEmail as string).trim().toLowerCase())) {
			setUserEmailValidness("invalid");
			setErrorMessage("Please provide a valid email");
		} else {
			setUserEmailValidness("valid");
			setErrorMessage(null);
		}
	};

	return (
		<form onSubmit={handleFormSubmit} className="relative" method="POST">
			<div className="relative desktop:w-[45.5rem]">
				<Input
					label="Customer email address"
					placeholder="Email Address"
					name="customer-email"
					type="email"
					onChange={handleEmailChange}
				/>
				<Button>
					<img className="w-[1.2rem] h-[2rem]" src="/images/vector/icons/arrow-right.svg" alt="" />
					<span className="sr-only">Send data</span>
				</Button>
				{userEmailValidness === "invalid" && (
					<div className="w-[2.4rem] h-[2.4rem] rounded-full bg-carnation-400 flex items-center justify-center absolute top-[50%] translate-y-[-50%] right-[7.5rem] z-20 desktop:right-[11.9rem]">
						<img
							className="w-[0.3rem] h-[1.3rem]"
							src="/images/vector/icons/exclamation-mark.svg"
							alt=""
						/>
						<span className="sr-only">Invalid input</span>
					</div>
				)}
				{errorMessage && (
					<p className="font-josefinSans font-normal text-[1.3rem] text-carnation-400 absolute bottom-[-2.4rem] left-[2.4rem] leading-[100%] desktop:left-[3.2rem] desktop:bottom-[-2.4rem]">
						{errorMessage}
					</p>
				)}
			</div>
		</form>
	);
};
