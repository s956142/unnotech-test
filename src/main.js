import Vue from "vue"
import App from "./App.vue"
import router from "./router" // 安裝導頁套件
import axios from "axios" // 引入API套件

Vue.prototype.$http = axios // 註冊全域變數

import $ from "jquery"
window.$ = $
import "bootstrap"
import "./assets/css/all.css"

import "bootstrap/dist/css/bootstrap.min.css"
new Vue({
  render: h => h(App),
  router
}).$mount("#app")
