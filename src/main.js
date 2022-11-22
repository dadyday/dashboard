import { createApp, reactive } from 'vue';
import App from './App.vue';
const app = createApp(App);
app.config.globalProperties.$appState = reactive({ theme: 'lara-light-indigo', darkTheme: false });

import Router from './router';
app.use(Router);
Router.beforeEach(function(to, from, next) {
    window.scrollTo(0, 0);
    next();
});

import PrimeVue from './primeVue.js';
app.use(PrimeVue);

app.mount('#app');