export default (state, action) => {
  switch (action.type) {
    case "success_register":
    case "success_login":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        userAuth: true,
        errors: null,
      };
    case "fail_register":
    case "fail_login":
    case "logout":
    case "auth_error":
      console.log("removiendo token");
      localStorage.removeItem("token");
      return {
        ...state,
        userAuth: null,
        errors: action.payload,
        user: null,
        loading: null,
      };
    case "user_geted":
      return {
        ...state,
        user: action.payload,
        userAuth: true,
        errors: null,
      };
    default:
      return state;
  }
};
