<template>
  <div class="book-list-component container wireframe">
    <p> bookListComponent</p>
    <div class="wrapper">
      <book-card class="" v-for="(item,index) in bookCardList" :bookInfo="item" :key="index"></book-card>
    </div>
  </div>
</template>

<script>
import BookCard from "../components/BookCardComponent";

export default {
  name: "bookListComponent",
  props: {
    headerName: String
  },
  data() {
    return {
      bookCardList: []
    };
  },
  mounted: function() {
    this.getBooks();
  },
  methods: {
    getBooks: function() {
      this.$http.get("https://fe-interview-api.unnotech.com/books").then(
        response => {
          console.log("========== http post response ==========", response);
          this.bookCardList = response.data;

          console.log("respositoryList", JSON.stringify(this.bookCardList));
        },
        refObj => {
          console.log("Rejected - promise_funcWithDefer - ", refObj);
        }
      );
    }
  },
  components: {
    BookCard
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
