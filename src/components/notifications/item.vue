<template>
    <div class="notification">{{item.title}}
        <p>{{item.subtitle}}</p>
        {{item.id}}
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
  min-height: 70px;
  width: 100%;
  border: var(--input-border-width) solid var(--lighter-gray);
  border-radius: 5px;
  margin-bottom: 8px;
  transition: all 0.2s ease-out;
}
</style>
