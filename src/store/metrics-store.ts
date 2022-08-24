import { createStore } from "vuex";

import { axes } from "../definitions/employee-metrics";

const INITIAL_SET_DATA = {
  name: "",
  [axes.TECHNOLOGY]: 0,
  [axes.SYSTEM]: 0,
  [axes.PEOPLE]: 0,
  [axes.PROCESS]: 0,
  [axes.INFLUENCE]: 0,
};
const store = createStore({
  state() {
    return {
      metrics: [INITIAL_SET_DATA],
      selectedIndex: 0,
    };
  },
  mutations: {
    setMetricValue(
      state,
      payload: { index?: number; metric: axes; value: number }
    ) {
      const index = payload.index || state.selectedIndex;
      const metric = payload.metric;
      state.metrics[index][metric] = payload.value;
    },
    setMetricName(state, payload: { index?: number; name: string }) {
      const index = payload.index || state.selectedIndex;

      state.metrics[index].name = payload.name;
    },
    setSelectedIndex(state, payload: { index: number }) {
      state.selectedIndex = payload.index;
    },
    initializeState(state, payload) {
      state.metrics = payload;
    },
    addSet(state, payload) {
      const newSetdata = payload.data || { ...INITIAL_SET_DATA };

      state.metrics = [...state.metrics, newSetdata];
    },
  },
  getters: {
    getScoreOfSet:
      (state) =>
      (index = state.selectedIndex) => {
        const { Influence, People, Process, System, Technology } =
          state.metrics[index];
        return [Technology, System, People, Process, Influence];
      },
    getNameOfSet:
      (state) =>
      (index = state.selectedIndex) => {
        return state.metrics[index || state.selectedIndex].name;
      },
  },
});

export default store;
