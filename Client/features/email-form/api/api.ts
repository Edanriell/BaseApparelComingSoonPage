import { postData } from "@shared/api";

export const sendUserEmail = async (email: string) => {
	try {
		const response = await postData("/api/users/emails", { userEmail: email });

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				`Failed to send email. Status: ${response.status}. Message: ${errorText || "Unknown error"}`
			);
		}

		const contentType = response.headers.get("Content-Type");

		if (!contentType || !contentType.includes("application/json")) {
			throw new Error("Expected JSON response but received a different format.");
		}

		return await response.json();
	} catch (error) {
		console.error("An error occurred while sending the email:", error);
		throw error;
	}
};
