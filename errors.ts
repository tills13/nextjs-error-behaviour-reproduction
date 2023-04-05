function statusCodeToMessage(statusCode: number) {
  switch (statusCode) {
    case 404:
      return "Not Found";
    default:
      return "Internal Server Error";
  }
}

class HttpError extends Error {
  constructor(public statusCode: number) {
    super(`${statusCode} - ${statusCodeToMessage(statusCode)}`);
  }
}

export const Http404Error = new HttpError(404);
