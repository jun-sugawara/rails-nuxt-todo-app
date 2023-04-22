// このファイルはあくまでstate,mutation,actionをまとめておくファイル
// ここを使ってログインの状態を読み込んだり、
// 逆に書き込んだりする場合は別ファイルから参照する必要があります。

// ユーザー情報の入れ物を作成。デフォルト値はnull
export const state = () => ({
  currentUser: {}
});

// setUserというstateに書き込むためのメソッドを作成。actionからsetUserの呼び出しを受けた際に
// stateの情報（ログインユーザーの状態）を書き換えることができる。
// state.currentUser = payloadは第二引数で渡ってきた情報をcurrentuserに入れている
export const mutations = {
  setUser(state, payload) {
    state.currentUser = payload
  },
};

// 一番最初にvuexからのリクエストを受け取る場所。コンテキストオブジェクトという
// Storeインスタンスを受け取って、setUserという名前でmutationsを呼びだす
export const actions = {
  setUser (context, data) {
    context.commit('setUser', data)
  }
};
