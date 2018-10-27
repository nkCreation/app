<template>
    <div class="notification">
        <div class="icon-main"><i class="material-icons">cloud_off</i></div>
        <div class="content">
        {{item.title}}
        <p>{{item.subtitle}}</p>        
        </div>
        <div class="icon-right"><i class="material-icons">arrow_forward</i></div>
    </div>
</template>
<script>
import { mapMutations } from "vuex";
import { REMOVE_NOTIFICATION } from "@/store/mutation-types";
export default {
  name: "v-item",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations("notifications", [REMOVE_NOTIFICATION]),
    startItemTimeout() {
      if (this.item.delay !== undefined) {
        setTimeout(this.removeItemFromStore.bind(this), this.item.delay);
      }
    },
    removeItemFromStore() {
      this.$store.commit(REMOVE_NOTIFICATION, this.item.id);
    }
  },
  mounted() {
    this.startItemTimeout();
  }
};
</script>
<style scoped>
.notification {
  display: flex;
  align-items: center;
  min-height: 64px;
  width: 100%;
  border: var(--input-border-width) solid var(--lighter-gray);
  border-radius: 5px;
  margin-bottom: 8px;
  padding: 10px;
  background-color: var(--white);
  transition: all var(--medium) ease-out;
}
.icon-main {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--lighter-gray);
}
.icon-right {
  width: 20px;
  height: 20px;
  margin-left: auto;
  color: var(--lighter-gray);
}
.content {
  padding-left: 10px;
}
</style>
