import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const initialState = {
  values: {
    startDistance: 21000,
    endDistance: 54000,
    planLength: 23,
  },
};
export default (history) =>
  combineReducers({
    form: formReducer.plugin({
      userSpec: (state = initialState, action) => {
        return state;
      },
    }),
  });
