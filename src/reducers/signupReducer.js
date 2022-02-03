export const signupReducer = (
  state = {
    success: false,
    loading: false,
    data: {},
  },
  action
) => {
  switch (action.type) {
    case "SIGNUP_PENDING":
      return {
        ...state,
        loading: true,
      };

    case "SIGNUP_FULLFILLED":
      return {
        ...state,
        success: true,
        loading: true,
        data: action.payload,
      };
    case "SIGNUP_REJECTED":
      return {
        ...state,
        success: false,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};
