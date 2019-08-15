import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

// Modules
import money from './modules/money';

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  /**
   * Assign the modules to the store.
   */
  modules: {
    money,
  },

  /**
   * If strict mode should be enabled.
   */
  strict: debug,
});
