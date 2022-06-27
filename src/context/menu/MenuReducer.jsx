const reducer = (state, action) => {
    switch (action.type) {
      case "SET_MENU":
        return {
          ...state,
          menu: action.payload.menu,
          menuSelect: action.payload.menuSelect,
        };
  
      case "CHANGE_MENU_SELECT":
        let menuSelect = state.menu.filter(
          (item) => item.category === action.payload
        );
  
        return {
          ...state,
          menuSelect,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  