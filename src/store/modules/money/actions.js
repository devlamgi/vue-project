import * as types from './mutation-types';

export const register = ({ commit }, payload) => {
  commit(types.REGISTER, payload);
};

export default {
  register,
};
