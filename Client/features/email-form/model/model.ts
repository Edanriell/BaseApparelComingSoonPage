export const validateEmail = (email: string) => {
	const emailTestRegexp = RegExp(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/);
	return emailTestRegexp.test(email);
};
