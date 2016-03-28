export const throwError = (condition, message) => {
	if(condition) {
		throw new Error(message);
	}
};
