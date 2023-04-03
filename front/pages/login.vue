<template>
  <v-row>
    <v-col cols="12" md="4">
      <h2>Login</h2>
      <form>
        <!-- emailの値をバインド。入力することでthis.emailの値をリアルタイムで変更する -->
        <v-text-field v-model="email" :counter="20" label="email" required></v-text-field>
        <!-- :type="show1 ? 'text' : 'password'" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"で
          目のアイコンの切り替えと、パスワードの伏せ字/表示を切り替える -->
        <v-text-field v-model="password" label="password" required :type="show1 ? 'text' : 'password'"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show1 = !show1"></v-text-field>
        <v-btn class="mr-4" @click="login">submit</v-btn>
        <!-- 認証に失敗した場合、エラーを表示する -->
        <p v-if="error" class="errors">{{ error }}</p>
      </form>
    </v-col>
  </v-row>
</template>

<script>
  import firebase from "@/plugins/firebase";
  export default {
    data() {
      return {
        email: "",
        password: "",
        show1: false,
        error: null,
      };
    },
    methods: {
      async login() {
        this.error = null;
        await firebase
          .auth()
          // signInWithEmailAndPasswordはfirebaseのメソッド。メールとpasswordをもとに認証を行う。
          // この関数にフォームに入力したEmailとパスワードを送ることでログイン機能を実現できる
          .signInWithEmailAndPassword(this.email, this.password)
          // 認証に失敗した場合はエラー情報をthis.errorとして保存する
          .catch((error) => {
            switch (error.code) {
              case "auth/user-not-found":
                this.error = "メールアドレスが間違っています";
                return
              case "auth/wrong-password":
                this.error = "※パスワードが正しくありません";
                return
              default:
                this.error = "※メールアドレスとパスワードをご確認ください";
                return
            };
          });
          
        // 認証に成功した場合、ルートページへ遷移する
        if (this.error === null) {
          this.$router.push("/");
        }
      },
    },
  };

</script>

<style scoped>
  .errors {
    color: red;
    margin-top: 20px;
  }

</style>

