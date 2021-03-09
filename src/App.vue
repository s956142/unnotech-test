<template>
  <div id="app">
    <router-view class="mb-2" name="header" :headerName="headerName"></router-view>
    <router-view name="body" @header-setting="header"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      headerName: ""
    };
  },
  methods: {
    //顯示header
    header: function(obj) {
      console.log("header-setting", obj);
      this.headerName = obj.name;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
