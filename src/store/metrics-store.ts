import { createStore } from "vuex";

import { axes } from "../definitions/employee-metrics";

const store = createStore({
  state() {
    return {
      metrics: [
        {
          name: "",
          [axes.TECHNOLOGY]: 0,
          [axes.SYSTEM]: 0,
          [axes.PEOPLE]: 0,
          [axes.PROCESS]: 0,
          [axes.INFLUENCE]: 0,
        },
      ],
    };
  },
  mutations: {
    setMetricValue(
      state,
      payload: { index?: number; metric: axes; value: number }
    ) {
      console.log("Something");

      const index = payload.index || 0;
      const metric = payload.metric;
      state.metrics[index][metric] = payload.value;
    },
    setMetricName(state, payload: { index?: number; name: string }) {
      const index = payload.index || 0;
      state.metrics[index].name = payload.name;
    },
    initializeState(state, payload) {
      state.metrics = payload;
    },
  },
  getters: {
    getScoreOfSet(state, index = 0) {
      const { Influence, People, Process, System, Technology } =
        state.metrics[0];
      return [Technology, System, People, Process, Influence];
    },
    getNameOfSet(state, index = 0) {
      return state.metrics[0].name;
    },
  },
});

export default store;
