import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.yellow.lighten1,
                secondary: colors.yellow.darken1,
                accent: colors.lightBlue.lighten3,
                background: colors.yellow.lighten5                
            }
        }
    }
});
