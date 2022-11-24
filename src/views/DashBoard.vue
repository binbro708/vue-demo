<template>
  <Navbar></Navbar>
  <router-view />
</template>
<script>
import Navbar from "../components/NavBar.vue";

export default {
  // 因為nav會越寫越長，故拆分成元件
  components: {
    Navbar,
  },

  created() {
    // mdn文件給的方法，使用replace取cookie
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    // 把token加入header
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push("login");
      }
    });
  },
};
</script>
