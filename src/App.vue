<template>
  <v-app>
    <app-navigation-drawer></app-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer>
      <!-- ... -->
    </v-footer>
  </v-app>
</template>

<script>
import AppNavigationDrawer from '@/components/AppNavigationDrawer.vue'

export default {
  components: {
    AppNavigationDrawer
  }
};
</script>