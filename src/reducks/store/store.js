import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
/**
 * 分割したReducersをimport
 */
import { UsersReducer } from "../users/reducers";

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      // router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(routerMiddleware())
  );
}
