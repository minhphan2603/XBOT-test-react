import { UPDATE_SUMMARY } from "../constant";

const initialState = {};

export const summaryReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_SUMMARY:
      newState = { ...state };
      action.payload.forEach(item => {
        if (!newState[item.code]) {
          newState[item.code] = {};
          newState[item.code].starting = item.price;
          newState[item.code].lowest = item.price;
          newState[item.code].heighest = item.price;
          newState[item.code].current = item.price;
        } else {
          newState[item.code].current = item.price;
          if (item.price < newState[item.code].lowest) {
            newState[item.code].lowest = item.price;
          }
          if (item.price > newState[item.code].heighest) {
            newState[item.code].heighest = item.price;
          }
        }
      });
      return newState;
    default:
      return state;
  }
};
