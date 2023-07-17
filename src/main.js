import { createApp } from 'vue';
import App from './App.vue';
import * as bootstrap from "bootstrap"; //nella documentazione di bootstrap guardare la sezione vite

import { router } from './router';

createApp(App).use(router).mount('#app')
