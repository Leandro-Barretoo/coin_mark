const ADD_COVID = 'coinMark/markets/ADD_MARKET';

const initialState = [];

export const addCovidData = (payload) => ({
  type: ADD_COVID,
  payload,
});

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COVID:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default covidReducer;
