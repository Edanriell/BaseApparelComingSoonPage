import { ChangeEvent, FC, FormEvent, useState } from "react";

import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import { validateEmail } from "@features/email-form/model";

import { sendUserEmail } from "./api";

export const EmailForm: FC = () => {
	const [formSubmission, setFormSubmission] = useState<
		"idle" | "unSubmitted" | "submitted" | "submitting"
	>("idle");
	const [userEmail, setUserEmail] = useState<string | null>(null);
	const [userEmailValidness, setUserEmailValidness] = useState<"valid" | "invalid" | "unknown">(
		"unknown"
	);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [successMessage, setSuccessMessage] = useState<string | null>(null);

	const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setSuccessMessage(null);
		setErrorMessage(null);

		if (userEmailValidness === "invalid") return;

		const formSubmissionResult = localStorage.getItem("formSubmissionResult");
		if (formSubmissionResult) {
			const parsedFormSubmissionResult = JSON.parse(formSubmissionResult);
			if (parsedFormSubmissionResult.message === "submitted") {
				setFormSubmission(parsedFormSubmissionResult.message);
				setSuccessMessage(
					`You have already submitted an email: ${parsedFormSubmissionResult.email}`
				);
				return;
			}
		}

		try {
			setFormSubmission("submitting");

			const response = await sendUserEmail(userEmail!);
			setSuccessMessage(response);
			setFormSubmission("submitted");

			if (!localStorage.getItem("formSubmissionResult")) {
				localStorage.setItem(
					"formSubmissionResult",
					JSON.stringify({ message: "submitted", email: userEmail })
				);
			}
		} catch (error) {
			if (error instanceof Error) {
				console.error("Error message:", error.message);

				const splitMessage = error.message.split('Message: "');
				const extractedMessage =
					splitMessage.length > 1
						? splitMessage[1].replace(/"$/, "")
						: "An unexpected error occurred.";

				setErrorMessage(extractedMessage);
			} else {
				console.error("Unexpected error:", error);
				setErrorMessage("An unexpected error occurred.");
			}

			setFormSubmission("unSubmitted");
		}
	};

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUserEmail(event.target.value);

		if (!validateEmail((userEmail as string)?.trim()?.toLowerCase())) {
			setUserEmailValidness("invalid");
			setErrorMessage("Please provide a valid email");
		} else {
			setUserEmailValidness("valid");
			setErrorMessage(null);
		}
	};

	const isButtonDisabled = (
		formSubmission: "idle" | "unSubmitted" | "submitted" | "submitting",
		userEmailValidness: "valid" | "invalid" | "unknown"
	) =>
		(formSubmission === "idle" && userEmailValidness === "invalid") ||
		(formSubmission === "idle" && userEmailValidness === "unknown") ||
		formSubmission === "submitting" ||
		formSubmission === "submitted";

	return (
		<form
			onSubmit={handleFormSubmit}
			className="relative flex-grow-0 flex-shrink-0 w-full flex justify-center desktop:flex-grow-[unset] desktop:flex-shrink-[unset] desktop:w-[unset] desktop:block"
			method="POST"
		>
			<div className="relative w-full max-w-[42rem] desktop:w-[45.5rem] desktop:max-w-[unset]">
				<Input
					label="Customer email address"
					placeholder="Email Address"
					name="customer-email"
					type="email"
					isInputInvalid={userEmailValidness === "invalid"}
					onChange={handleEmailChange}
				/>
				<Button disabled={isButtonDisabled(formSubmission, userEmailValidness)}>
					<img
						className="w-[1.2rem] h-[2rem] pointer-events-none select-none"
						src="/images/vector/icons/arrow-right.svg"
						alt=""
					/>
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
					<p className="font-josefinSans font-normal text-[1.3rem] text-carnation-400 absolute bottom-[-3.4rem] left-[2.4rem] leading-[100%] desktop:left-[3.2rem] desktop:bottom-[-2.4rem]">
						{errorMessage}
					</p>
				)}
				{successMessage && (
					<p className="font-josefinSans font-normal text-[1.3rem] text-jade-600 absolute bottom-[-3.4rem] left-[2.4rem] leading-[100%] desktop:left-[3.2rem] desktop:bottom-[-2.4rem]">
						{successMessage}
					</p>
				)}
			</div>
		</form>
	);
};
