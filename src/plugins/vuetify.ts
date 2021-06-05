import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import ko from 'vuetify/src/locale/ko'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: '#82B1FF',
                secondary: '#424242',
                accent: '#98CCD8',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                mesBackground: colors.grey.lighten3,
                mesPrimary: colors.indigo.darken4,
                mesColorOne: colors.orange.darken1,
                mesColorTwo: colors.lightGreen.lighten1,
                mesColorThree: colors.red.darken2,
                mesColorFour: colors.blue.accent2,
                mesColorFive: colors.blue.darken4,
                mesColorSix: '#92b4e8',
                mesColorMain: '#2d99f2'
            }
        }
    },
    lang: {
        locales: { ko },
        current: 'ko'
    },
    defaultAssets: false,
    icons: {
        iconfont: 'md'
    }
})