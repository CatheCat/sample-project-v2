import { createVuetify } from 'vuetify'

import colors from 'vuetify/lib/util/colors'

export default createVuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.deepOrange,
        secondary: colors.grey.lighten2
      }
    }
  }
})