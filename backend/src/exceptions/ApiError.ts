import HttpStatusCodes from "@src/constants/HttpStatusCodes";

export class ApiError extends Error {
  status: number;
  errors: string[];

  constructor(status: number, message: string, errors: string[] = []) {
    super(message);

    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiError(HttpStatusCodes.UNAUTHORIZED, "User is not authorized");
  }

  static BadRequest(message: string, errors: string[] = []) {
    return new ApiError(HttpStatusCodes.BAD_REQUEST, message, errors);
  }
}
