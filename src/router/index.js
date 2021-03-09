import Vue from "vue"
import Router from "vue-router"

/* pages */

import BookListPage from "../pages/BookListPage"
import BookDetailPage from "../pages/BookDetailPage"
import BookListComponent from "../components/BookListComponent"

// add global-level functionality to Vue
// call VueRouter.install(Vue)

Vue.use(Router)

var router = new Router({
  // 使用 HTML 5 模式
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "",
      redirect: { name: "books" }
    },
    {
      path: "/books",
      name: "books",
      components: {
        header: BookListComponent,
        body: BookListPage
      }
    },
    {
      path: "/books/:bookId",
      name: "bookDetail",
      components: {
        header: BookListComponent,
        body: BookDetailPage
      }
    }
  ]
})

export default router
