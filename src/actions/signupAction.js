import axios from "axios";
export const signupAction = function (data) {
  return {
    type: "SIGNUP",
    payload: axios.post("http://3.140.210.76:8000/api/user/", data),
  };
};
