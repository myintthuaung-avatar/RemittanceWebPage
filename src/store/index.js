import { createStore } from 'vuex'
import app from './app.module';

export default new createStore({
    modules: {
        app
    },
   
});