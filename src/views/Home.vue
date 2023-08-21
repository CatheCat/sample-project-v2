<template>
  <div>
    <v-select v-show="isMobile" v-model="activeTab" :items="tabs"></v-select>
    <v-tabs v-show="!isMobile" v-model="activeTab">
      <v-tab v-for="tab in tabs" :key="tab" :href="`#${tab}`">{{ tab }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="activeTab">
      <v-tab-item v-for="tab in tabs" :key="tab" :value="tab">
        <v-card flat>
          <v-card-text>Find something interesting to discuss {{ tab }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    activeTab: null,
    tabs: ['HOT', 'NEW', 'RISING', 'CONTROVERSIAL', 'TOP', 'GILDED', 'PROMOTED']
  }),
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.mobile
    }
  }
}
</script>
