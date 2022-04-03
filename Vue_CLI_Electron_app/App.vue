<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <br />
  <br />
  <input type="button" v-on:click="send" value="クリック" />
  <div>{{ message }}</div>
  <table>
    <tr v-for="(item, key) in response.message" v-bind:key="key">
      <td>{{key}}</td>
      <td>: </td>
      <td>{{item}}</td>
    </tr>
  </table>
  <br />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data: function () {
    return {
       message: "クリック前" ,
       response: {sample: "sample"}
    };
  },

  mounted: function () {
    this.message = "マウントされました。";

    window.ipc.onWakuwakuYyy((arg) => {
      this.response = arg;
    });
  },

  methods: {
    send: function () {
      this.message = "クリックされました。";
      window.ipc.sendWakuwakuXxx({ sendmessage: "get" });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
