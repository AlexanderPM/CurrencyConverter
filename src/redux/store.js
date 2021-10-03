import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
import reducers from "./reducers/reducers-combine";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

let store = createStore(reducers, persistedState,
    compose(
    applyMiddleware(thunk)
   /*  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
)
)

store.subscribe(() => {
    saveState({
        activeValuteState: store.getState().activeValuteState});
})

export default store;