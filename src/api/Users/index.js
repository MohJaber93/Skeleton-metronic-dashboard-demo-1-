import { API_COMMON_STATUS, getUnknownStatusError } from "helpers/api-helper";
import axios from "axios";

export const getUsers = async query => {
  let url = "/users/all";
  if (query) {
    url = `/users/all?${query}`;
  }
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
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

export const addNewUser = async userData => {
  try {
    const response = await axios.post(`/users/add-user`, userData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    let data = {};
    switch (response.status) {
      case API_COMMON_STATUS.RESOURCE_CREATED:
        data = {
          responseStatus: API_COMMON_STATUS.RESOURCE_CREATED,
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
      case API_COMMON_STATUS.BAD_REQUEST:
        data = {
          responseStatus: API_COMMON_STATUS.BAD_REQUEST,
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

export const updateUserData = async payload => {
  try {
    const response = await axios.put(
      `/users/update-user/${payload.userId}`,
      payload.userData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    let data = {};
    switch (response.status) {
      case API_COMMON_STATUS.RESOURCE_CREATED:
        data = {
          responseStatus: API_COMMON_STATUS.RESOURCE_CREATED,
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

export const blockUser = async userId => {
  try {
    const response = await axios.post(
      `/users/block-user/${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
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

export const sendNotifications = async payload => {
  try {
    const response = await axios.post(`/users/send-nottifcation`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
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
