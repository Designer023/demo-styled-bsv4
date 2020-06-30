import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import createRootReducer from "./reducers";
import { loadState, saveState } from "./localStorage";
import authMiddleware from "./middleware/auth";
import appMiddleware from "./middleware/app";

import throttle from "lodash/throttle";

const persistedState = loadState();

function configureStore(preloadedState) {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(),
    persistedState,
    composeEnhancer(applyMiddleware(thunk, appMiddleware, authMiddleware))
  );

  store.subscribe(
    throttle(() => {
      saveState({
        auth: store.getState().auth,
        athlete: store.getState().athlete,
        ui: store.getState().ui,
      });
    }, 1000)
  );

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      store.replaceReducer(createRootReducer());
    });
  }

  return store;
}

export const store = configureStore();
