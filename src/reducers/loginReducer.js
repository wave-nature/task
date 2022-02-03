export const loginReducer = (
  state = {
    success: false,
    loading: false,
    data: {},
  },
  action
) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        loading: true,
      };

    case "LOGIN_FULLFILLED":
      return {
        ...state,
        success: true,
        loading: true,
        data: action.payload,
      };
    case "LOGIN_REJECTED":
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
