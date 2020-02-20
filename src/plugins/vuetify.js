import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import theme from "../theme";

export default new Vuetify({
  theme: {
    themes: {
      light: theme,
    }
  },
  icons: {
    iconfont: 'md',
  },
});

Vue.use(Vuetify);
