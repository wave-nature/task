import axios from "axios";
export const loginAction = function (data) {
  return {
    type: "LOGIN",
    payload: axios.post("http://3.140.210.76:8000/api/token/", data),
  };
};
