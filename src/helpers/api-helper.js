/**
 * This is API common status RESPONSE
 *
 */
const API_COMMON_STATUS = Object.freeze({
  SUCCESS: 200,
  FAILED: 500,
  VALIDATION_ERROR: 422,
  RESOURCE_CREATED: 201,
  PUT_SUCCESS: 202,
  RESOURCE_DELETED: 204,
  UNAUTHORIZED: 401,
  UNAUTHENTICATED: 403,
  ERROR: 404,
  BAD_REQUEST: 400
});

/**
 * This method will return common status error for unkown status
 *
 * @returns {{message: string, responseStatus: number}}
 */
const getUnknownStatusError = () => {
  return {
    responseStatus: API_COMMON_STATUS.ERROR,
    message: "Unknown Error Status!"
  };
};

export { API_COMMON_STATUS, getUnknownStatusError };
