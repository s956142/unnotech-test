<template>
  <div class="wireframe b-c-grey p-1 pt-2">
    BookDetailPage
    <div class="row pt-3">
      <div class="col-md-8 col-sm-12">
        <div class="row">
          <input-component :data="{word:'價格',val:booksDetail.price}" @updateValue="updatePrice" class="col-sm-12 mb-2"></input-component>
          <input-component :data="{word:'數量',val:booksDetail.count}" @updateValue="updateCount" class="col-sm-12 mb-2"></input-component>
        </div>
      </div>
      <div class="col-md-3 col-sm-12 p-rel pb-35">
        <button class="btn-modify" @click="modify" :disabled="!booksDetail.id">確認修改</button>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from "../components/InputComponent";

export default {
  name: "bookDetail",
  data() {
    return {
      choosen: false,
      booksDetail: {
        id: "",
        price: 0,
        count: 0
      }
    };
  },
  mounted: function() {
    this.getBookDetail();
  },
  methods: {
    getBookDetail: function() {
      this.$http.get("https://fe-interview-api.unnotech.com/profile/" + this.$route.params.bookId).then(
        response => {
          console.log("========== http post response ==========", response);
          this.booksDetail = response.data;
        },
        refObj => {
          console.log("Rejected - promise_funcWithDefer - ", refObj);
          this.booksDetail = {
            id: "",
            price: 0,
            count: 0
          };
        }
      );
    },
    updateBookInfo: function() {
      this.$http
        .patch("https://fe-interview-api.unnotech.com/profile/" + this.$route.params.bookId, {
          price: this.booksDetail.price,
          count: this.booksDetail.count
        })
        .then(
          response => {
            console.log("========== http post response ==========", response);
            // this.booksDetail = response.data;
          },
          refObj => {
            console.log("Rejected - promise_funcWithDefer - ", refObj);
          }
        );
    },
    updatePrice: function(val) {
      this.booksDetail.price = val;
    },
    updateCount: function(val) {
      this.booksDetail.count = val;
    },
    modify: function() {
      this.updateBookInfo();
    }
  },
  watch: {
    $route() {
      this.getBookDetail();
    }
  },
  components: {
    InputComponent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
