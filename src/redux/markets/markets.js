const ADD_MARKET = 'coinMark/markets/ADD_MARKET';

const initialState = [];

export const addMarket = (payload) => ({
  type: ADD_MARKET,
  payload,
});

const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MARKET:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default marketReducer;
