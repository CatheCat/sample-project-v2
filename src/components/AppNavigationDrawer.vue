<template>
  <v-navigation-drawer app>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-subtitle class="font-weight-medium">kikoherrsc@gmail.com</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item>
        <v-text-field class="p-5" label="Search" solo></v-text-field>
      </v-list-item>
      <v-list-item  v-for="item in items1" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-group v-for="item in items2" :key="item.title" v-model="item.active" :prepend-icon="item.action" no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="child in item.items" :key="child.title">
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'AppNavigationDrawer',

    data: () => ({
      items1: [
        { title: 'Home', icon: 'mdi-home' },
        { title: 'Notification', icon: 'mdi-bell' },
        { title: 'My subredits', icon: 'mdi-view-dashboard' },
        { title: 'Gaming', icon: '' },
        { title: 'Funny', icon: '' },
        { title: 'Series', icon: '' }
      ],
      items2: [
        {
          action: 'mdi-account-multiple',
          active: true,
          items: [
            { title: 'List Item' },
            { title: 'List Item' }
          ],
          title: 'About',
        },
        {
          action: 'mdi-help-box',
          items: [
            { title: 'List Item' },
          ],
          title: 'Help',
        },
        {
          action: 'mdi-tools',
          items: [
            { title: 'List Item' },
          ],
          title: 'App & Tools',
        }
      ]
    }),
  }
</script>
