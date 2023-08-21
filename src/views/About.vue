<template>
  <v-container>
    <v-form ref="form" lazy-validation>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="firstname" label="Firstname" :rules="rules" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="lastname" label="Lastname" :rules="rules" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="email" label="Email" :rules="rules" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-select v-model="age" :items="ageOption" item-value="key" item-text="value" label="Age" required></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-radio-group v-model="gender" row required>
            <v-radio v-for="option in genderOptions" :key="option.key" :value="option.value" :label="option.value"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-combobox v-model="skill" :items="skillOptions" label="Skill" multiple required></v-combobox>
        </v-col>
        <v-col cols="12" md="6">
          <v-file-input v-model="file" label="File" truncate-length="15" required></v-file-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <v-textarea v-model="introdution" label="Introduction" :rules="rules" required></v-textarea>
        </v-col>
        <v-col cols="12" md="12">
          <v-slider v-model="treatment" label="Treatment" thumb-label="always" required></v-slider>
        </v-col>
      </v-row>
      <v-btn @click.prevent="submit">submit</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'About',

  data: () => ({
    firstname: null,
    lastname: null,
    email: null,
    gender: null,
    genderOptions: [
      {key: 0, value: '男'},
      {key: 1, value: '女'}
    ],
    age: null,
    ageOption: [
      {key: 20, value: '20~30'},
      {key: 30, value: '30~40'},
      {key: 40, value: '40~50'},
      {key: 50, value: '50~60'}
    ],
    skill: null,
    skillOptions: [
      'Javascript',
      'Vue',
      'Vuetify',
      'Docker'
    ],
    file: null,
    introdution: null, 
    treatment: null,
    rules: [
      v => !!v || 'This is required',
    ]
  }),
  methods: {
    submit () {
      this.$refs.form.validate()
    }
  }
}
</script>