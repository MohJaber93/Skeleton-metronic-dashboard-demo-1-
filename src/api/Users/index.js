import { API_COMMON_STATUS, getUnknownStatusError } from "helpers/api-helper";
import axios from "axios";

export const getHomeSummary = async token => {
  try {
    const response = await axios.get(`/admin/home`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    let data = {};
    switch (response.status) {
      case API_COMMON_STATUS.SUCCESS:
        data = {
          responseStatus: API_COMMON_STATUS.SUCCESS,
          ...response.data
        };
        break;
      case API_COMMON_STATUS.UNAUTHORIZED:
        data = {
          responseStatus: API_COMMON_STATUS.UNAUTHORIZED,
          message: response.data.error
        };
        break;
      case API_COMMON_STATUS.ERROR:
        data = {
          responseStatus: API_COMMON_STATUS.ERROR,
          message: response.data.message
        };
        break;
      default:
        data = getUnknownStatusError();
    }
    return data;
  } catch (error) {
    console.log(error, error.message, error.name);
    console.error(error);
  }
};
