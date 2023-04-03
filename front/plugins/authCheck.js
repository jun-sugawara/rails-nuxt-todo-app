import firebase from "@/plugins/firebase";
import axios from "@/plugins/axios";

const authCheck = ({ store, redirect }) => {
  // onAuthStateChangedはfirebaseの機能。ユーザーの情報をfirebaseへ確認しに行く。
  firebase.auth().onAuthStateChanged(async user => {
    // ユーザーが存在していれば、ユーザー情報を返す
    if (user) {
      const { data } = await axios.get('/v1/users', {
        params: {
          uid: user.uid,
        },
      });
      console.log("ログインしているユーザー:", data);
      // ユーザー情報をauth.jsのsetUserアクションに適用する
      store.dispatch("auth/setUser", data)
    } else {
      store.dispatch("auth/setUser", null)
    }
  });
};

export default authCheck;
