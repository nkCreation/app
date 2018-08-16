<template>
  <div class="notifications">        
      <v-item v-for="(notification, index) in notifications" :key="index" :item="notification"/>      
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
}
</style>
