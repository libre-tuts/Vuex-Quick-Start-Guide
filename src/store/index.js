// src/store/index.js
import Vuex from 'vuex';
import Vue from 'vue';
import createLogger from 'vuex/dist/logger';
import { mutations } from './mutations';
import actions from './actions';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];
const store = new Vuex.Store({
  state: {
    noteList: [],
    currentNote: { title: '', content: '' },
    editNote: null,
    editIndex: -1,
  },
  mutations,
  actions,
  strict: debug,
  plugins,
});

export default store;
