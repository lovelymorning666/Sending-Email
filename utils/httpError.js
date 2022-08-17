class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); //calling super for the meessage property
    this.code = errorCode;
  }
}

export default HttpError;