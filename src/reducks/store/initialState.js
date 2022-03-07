/**
 * ●Storeの初期状態
 * ●アプリに必要なstateを【全て】記述
 * ●exportしておく
 */
const initialState = {
  products: {},
  users: {
    isSignIn: false,
    uid: "",
    username: "",
  },
};

export default initialState;
