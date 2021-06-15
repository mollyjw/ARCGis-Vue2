import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                card: colors.blueGrey.darken3,
                header: colors.yellow.darken1,
                button: colors.yellow.lighten1,
                background: colors.yellow.lighten5,
                navbarText: colors.shades.black,
                titleText: colors.shades.black,
                cardText: colors.shades.white,
            },
            dark: {
                card: colors.indigo.lighten2,
                header: colors.indigo.darken3,
                button: colors.indigo.lighten1,
                background: colors.grey.darken4,
                navbarText: colors.shades.black,
                titleText: colors.shades.black,
                cardText: colors.shades.black
            }
        }
    }
});
