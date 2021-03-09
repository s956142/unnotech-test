<template>
  <div class="book-card wireframe m-1" :class="{'b-c-yellow':choosen}" @click="clickBook">
    <p> bookCard-{{bookInfo.id}}</p>
    <div class="m-1">
      <div class="px-1">
        <div class="img" :style="bookInfo.image?`background-image: url(${bookInfo.image});`:''">

        </div>
        <div class=" book-name">
          {{bookInfo.name}}
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookCardComponernt",
  props: {
    bookInfo: Object
  },
  data() {
    return {
      choosen: false
    };
  },
  mounted: function() {
    if (this.$route.params && this.$route.params.bookId) {
      this.choosen = this.$route.params.bookId == this.bookInfo.id;
    }
  },
  methods: {
    clickBook: function() {
      if (this.$route.params.bookId != this.bookInfo.id)
        this.$router.push({
          name: "bookDetail",
          params: { bookId: this.bookInfo.id }
        });
    }
  },
  watch: {
    "$route.params.bookId": {
      handler: function(val) {
        this.choosen = val == this.bookInfo.id;
        // choosen
      },
      deep: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
