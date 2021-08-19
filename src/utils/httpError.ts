
class httpError extends Error {
	code: number;
	constructor(message: string, errorCode: number) {
		super(message);
		this.code = errorCode;
	}
}

export default httpError;
