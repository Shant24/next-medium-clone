export enum RequestMethodsEnum {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export enum SuccessStatusCodesEnum {
  OK = 200,
  CREATED = 201,
  DELETED = 204,
  UPDATED = 205,
}

export enum ErrorStatusCodesEnum {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  PERMISSION_DENIED = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}
