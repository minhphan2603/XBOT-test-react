import axios from "axios";
import { UPDATE_LOG, UPDATE_SUMMARY } from "../constant";

export const updateDataAction = dispatch => {
  axios.get("https://join.reckon.com/stock-pricing").then(res => {
    // console.log(res.data);
    dispatch({
      type: UPDATE_LOG,
      payload: { time: new Date(), data: res.data }
    });
    dispatch({ type: UPDATE_SUMMARY, payload: res.data });
  });
};
