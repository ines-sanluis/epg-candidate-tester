import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        dark: true,
        themes: {
            dark: {
                primary: {
                    base: '#252525',
                    lighten5: '#919191',
                    lighten4: '#555555',
                    lighten3: '#434343',
                    lighten2: '#3C3C3C',
                    lighten1: '#2E2E2E',
                    darken1: '#181818',
                    darken2: '#000000'
                },
                seconday: {
                    base: '#E7E7E7'
                },
                accent: '#EA9F32'
            }
        }
    }
});
