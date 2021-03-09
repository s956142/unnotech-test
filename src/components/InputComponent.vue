<template>
  <div class="input-component">
    <div class="row">
      <div class="col-md-12 input-area">
        <p class="input-word mr-2">{{showWord}}: </p>
        <button class="button-div mx-1" @click="clickSub">－</button>
        <div class="input-view">
          {{showValue}}
        </div>
        <button class="button-div mx-1" @click="clickAdd">＋</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inputComponent",
  props: {
    data: {
      type: Object,
      default: function() {
        return { word: "", val: "" };
      }
    }
  },
  data() {
    return {
      showValue: "",
      showWord: ""
    };
  },
  mounted: function() {
    this.reloadValue();
  },
  methods: {
    reloadValue: function() {
      this.showValue = this.data.val;
      this.showWord = this.data.word;
    },
    clickSub: function() {
      if (!isNaN(this.showValue)) {
        var temp = Number(this.showValue);
        if (--temp > 0) {
          this.updateValue(temp);
        }
      }
    },
    clickAdd: function() {
      if (!isNaN(this.showValue)) {
        var temp = Number(this.showValue);
        ++temp;
        this.updateValue(temp);
      }
    },
    updateValue: function(val) {
      this.showValue = val;
      this.$emit("updateValue", this.showValue);
    }
  },
  watch: {
    data: {
      handler: function() {
        this.reloadValue();
      },
      deep: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
