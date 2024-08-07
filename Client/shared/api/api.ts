import { API_URL } from "@shared/config";

export const postData = (endpoint: string, body: unknown) =>
	fetch(API_URL + endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	});
