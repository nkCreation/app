<template>
  <div class="notifications">
    <transition-group name="slide-fade" tag="div">     
        <v-item v-for="(notification, index) in notifications" :key="index" :item="notification"/>
    </transition-group>
  </div> 
</template>
<script>
import VItem from "./item.vue";
export default {
  name: "VNotifications",
  components: {
    VItem
  },
  data() {
    return {};
  },
  computed: {
    notifications() {
      return this.$store.state.notifications.queue;
    }
  }
};
</script>
<style scoped>
.notifications {
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 340px;
  z-index: 999;
}
.slide-fade-enter-active {
  transition: all var(--medium) ease-out;
}
.slide-fade-leave-active {
  transition: all var(--slow) cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}
</style>
