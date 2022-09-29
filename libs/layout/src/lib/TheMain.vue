<template>
  <div>

    <div class="d-flex flex-column min-vh-100">
      <the-navbar></the-navbar>
      <b-container class="py-4 flex-grow-1">
        <slot />
      </b-container>
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheFooter from './TheFooter.vue';
import TheNavbar from './TheNavbar.vue';

export default Vue.extend({
  components: {
    TheFooter, TheNavbar
  },
  name: 'HelloWorld',
});
</script>
