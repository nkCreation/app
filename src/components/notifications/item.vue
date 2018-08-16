<template>
    <div class="notification">{{item.title}}
        <p>{{item.subtitle}}</p>
    </div>
</template>
<script>
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
}
</style>
