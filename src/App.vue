<template>
  <v-app>
    <app-navigation-drawer></app-navigation-drawer>

    <v-app-bar>
      <!-- ... -->
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- ... -->
      </v-container>
    </v-main>

    <v-footer>
      <!-- ... -->
    </v-footer>
  </v-app>
</template>

<script>

import AppNavigationDrawer from './components/AppNavigationDrawer.vue'

export default {
  name: 'App',

  components: {
    AppNavigationDrawer
  },
  data: () => ({
    //...
  }),
};
</script>
