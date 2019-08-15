
import { REGISTER } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [REGISTER](state, payload) {
    state.list.unshift(payload);
  },
};