/**
 * Actionsの書き方
 * ●Action typeを定義してexport
 * ●typeとpayloadを記述する
 * ●プレーンなオブジェクトを返す（★超重要）
 * Actionsの中では純粋にデータだけを扱いたい（APIアクセスやDB通信などは記述したくない）
 */

export const SIGN_IN = "SIGN_IN";
export function signInAction(userState) {
  return {
    type: SIGN_IN,
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username,
    },
  };
}

export const SIGN_OUT = "SIGN_OUT";
export function signOutAction() {
  return {
    type: SIGN_OUT,
    payload: {
      isSignedIn: false,
      uid: "",
      username: "",
    },
  };
}
