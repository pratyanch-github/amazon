// ********Just to learn***********
export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADDTOBASKET":
      return {
        ...state,
        basket: [...state.basket, action.items],
      };
    default:
      return state;
  }
}

export default reducer;
