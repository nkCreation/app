<template>
    <div class="notification">
        <div class="icon-main"><i class="material-icons">cloud_off</i></div>
        <div class="content">
          <div class="title">{{item.title}}</div>
          <div class="details">{{item.subtitle}}</div>
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
<style lang="scss" scoped>
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
  transition: color var(--fast) var(--transition);
  cursor: pointer;

  &:hover {
    color: var(--light-gray);
  }
}

.content {
  padding-left: 10px;
}

.title {
  font-weight: 700;
}

.details {
  color: var(--light-gray);
}
</style>
