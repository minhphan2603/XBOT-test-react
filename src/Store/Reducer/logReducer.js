import { UPDATE_LOG, PAUSE_LOG, RESUME_LOG } from "../constant";

const initialState = {
  isPaused: false,
  logArr: []
};

export const logReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_LOG:
      // console.log(action.payload);
      if (!state.isPaused) {
        newState = { ...state, logArr: [action.payload, ...state.logArr] };
        // console.log(newState);
        return newState;
      }
      return state;
    case PAUSE_LOG:
      newState = { ...state, isPaused: true };
      return newState;
    case RESUME_LOG:
      newState = { ...state, isPaused: false };
      return newState;
    default:
      return state;
  }
};
