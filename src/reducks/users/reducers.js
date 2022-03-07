/**
 * Reducersでは以下を必ずimport
 */
import * as Actions from "./actions";
import initialState from "../store/initialState";

/**
 * ●関数で宣言してexport
 * ●第一引数にstate、第二引数にactionがreturnした値
 * ●Actionsのtypeに応じてstateをどう変更するのかを決める
 * ●reducersでreturnするのはstateの変更
 * @param {initialState} state
 * @param {呼び出されるaction} action
 * @returns
 */
export const UsersReducer = (state = initialState, action) => {
  //switch分で、actionのタイプごとに変更するState、payloadを設定
  switch (action.type) {
    case Actions.SIGN_IN:
      return { ...state, ...action.payload };

    case Actions.SIGN_OUT:
      return { ...state, action };
    default:
      return state;
  }
};
