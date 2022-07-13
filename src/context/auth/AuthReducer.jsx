const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          email: action.payload.email,
          isAuth: action.payload.isAuth,
          position: action.payload.position,
        };
  
      case "UPDATE_IS_AUTH":
        return {
          ...state,
          isAuth: action.payload.isAuth,
          email: action.payload.email,
          consultando: action.payload.consultando,
        };
      case "LOGOUT":
        return {
          ...state,
          isAuth: false,
          email: null,
          position: "",
        };
      case "UPLOAD_LOADING":
        return {
          ...state,
          loading: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  