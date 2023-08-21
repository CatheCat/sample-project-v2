<template>
  <v-container fluid>
    <v-select v-show="isMobile" v-model="activeTab" :items="tabs"></v-select>
    <v-tabs v-show="!isMobile" v-model="activeTab">
      <v-tab v-for="tab in tabs" :key="tab" :href="`#${tab}`">{{ tab }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="activeTab">
      <v-tab-item v-for="tab in tabs" :key="tab" :value="tab">
        <v-row>
          <v-card flat>
            <v-card-title>Find something interesting to discuss {{ tab }}</v-card-title>
          </v-card>
        </v-row>
        <v-row>
          <v-col v-for="i in 6" :key="i">
            <v-card>
              <v-img :src="`https://picsum.photos/300/200?random=${i}&grayscale`"></v-img>
              <v-card-text>13 years ago today, a true patriot lost his life. Rest in Peace big guy.</v-card-text>
              <v-card-subtitle>6 hours ago by</v-card-subtitle>
              <v-card-actions>
                <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
                <v-btn icon><v-icon>mdi-bookmark</v-icon></v-btn>
                <v-btn icon><v-icon>mdi-share-variant</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
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
