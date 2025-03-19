
// main.js
import { createApp } from 'vue';
import App from '@/App.vue';
import { createI18n } from 'vue-i18n';


// Import translations
import en from '@/locales/en.json';
import bn from '@/locales/bn.json';
import hn from '@/locales/hn.json';



const i18n = createI18n({
    locale: 'en', // default locale
    fallbackLocale: 'en', // fallback locale in case the current locale is missing translations
    messages: { en, bn, hn }
  });

// Create the Vue app instance
const app = createApp(App);

// Use the i18n instance
app.use(i18n);

// Mount the app
app.mount('#app');
