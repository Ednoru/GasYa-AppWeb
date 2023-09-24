<template>
  <tabMenu></tabMenu>
  <Router-view></Router-view>
</template>

<script>
import tabMenu from './components/tabMenu.vue';

export default {
  name: 'App',
  components: {
    tabMenu
  },
  data() {
    return {
    }
  },
}
</script>