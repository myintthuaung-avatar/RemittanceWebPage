/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import api from "./services/api" 
// Composables
import { createSSRApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

//phone number plugin
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

// const globalOptions = {
//     mode: 'auto',
//   };

const app = createSSRApp(App)
app.config.globalProperties.$http = api;

registerPlugins(app)

const globals = app.config.globalProperties
export { globals }
app.use(VueTelInput); 
app.mount('#app')
