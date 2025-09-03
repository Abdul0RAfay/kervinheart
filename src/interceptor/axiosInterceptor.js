"use client";
import axios from "axios";
import momentTimezone from "moment-timezone";
import { useDispatch, useSelector } from "react-redux";

import RenderToast from "@/component/atoms/RenderToast";
import { baseURL } from "@/resources/utils/helper";

const useAxios = () => {
  const dispatch = useDispatch();
  const { accessToken, refreshToken } = useSelector(
    (state) => state.authReducer
  );

  const getErrorMsg = (error = null) => {
    if (error?.message === "Network Error") {
      return `Network Error : Please Check Your Network Connection`;
    }
    const message = error?.response?.data?.message?.error;
    let errorMessage = "";
    Array.isArray(message)
      ? message?.map(
          (item, i) =>
            (errorMessage = `${errorMessage} ${
              message?.length > 1 ? "•" : ""
            } ${item} \n`)
        )
      : (errorMessage = message);
    return errorMessage;
  };

  // Function to handle API requests
  const handleRequest = async ({
    method = "",
    route = "",
    data = {},
    headers = {},
    showAlert = true,
    isFormData = false,
  }) => {
    const url = baseURL(route);
    const _headers = {
      Accept: "application/json",
      "Content-Type": isFormData ? "multipart/form-data" : "application/json",
      timezone: momentTimezone.tz.guess(),
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      ...headers,
    };

    try {
      const response = await axios({ method, url, data, headers: _headers });
      return { response: response?.data, error: null };
    } catch (error) {
      console.log("Error in API call:", error);
      const errorMessage = getErrorMsg(error);
      console.log("🚀 ~ useAxios ~ errorMessage:", errorMessage);
      if (showAlert) {
        RenderToast({
          message: errorMessage || "An unexpected error occurred.",
          type: "error",
        });
      }
      return { error, response: null };
    }
  };

  return {
    Get: ({ route = "", headers = {}, showAlert = true }) =>
      handleRequest({ method: "get", route, headers, showAlert }),

    Post: ({
      route = "",
      data = {},
      headers = {},
      showAlert = true,
      isFormData = false,
    }) =>
      handleRequest({
        method: "post",
        route,
        data,
        headers,
        showAlert,
        isFormData,
      }),

    Put: ({
      route = "",
      data = {},
      headers = {},
      showAlert = true,
      isFormData = false,
    }) =>
      handleRequest({
        method: "put",
        route,
        data,
        headers,
        showAlert,
        isFormData,
      }),

    Patch: ({
      route = "",
      data = {},
      headers = {},
      showAlert = true,
      isFormData = false,
    }) =>
      handleRequest({
        method: "patch",
        route,
        data,
        headers,
        showAlert,
        isFormData,
      }),

    Delete: ({ route = "", headers = {}, showAlert = true }) =>
      handleRequest({ method: "delete", route, headers, showAlert }),
  };
};

export default useAxios;
