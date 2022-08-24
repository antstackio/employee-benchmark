<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { axes, employeeMetrics } from "../../definitions/employee-metrics";
import {
  levelHeading,
  levelSelectorButtonContainer,
  levelSelectorClass,
  levelSelectorActive,
} from "./levelSelector.styles.css";

const store = useStore();

const assignScoreToLevel = (level: number, metric: axes) => {
  store.commit("setMetricValue", { metric, value: level });
};
const scoreOfSet = computed(() => store.getters.getScoreOfSet);
const nameOfSet = computed(() => store.getters.getNameOfSet);
</script>

<template>
  <input
    placeholder="Name of Set"
    :class="levelHeading"
    type="text"
    :value="nameOfSet"
    @input="
      (event:any) => store.commit('setMetricName', { name: event.target.value })
    "
  />
  <div
    v-for="(employeeMetric, index) in Object.keys(axes)"
    :key="axes[employeeMetric as  keyof typeof axes]"
  >
    <h1 :class="levelHeading">
      {{ axes[employeeMetric as  keyof typeof axes] }}
    </h1>
    <div :class="levelSelectorButtonContainer">
      <div
        v-for="level in employeeMetrics[axes[employeeMetric as keyof typeof axes]].levels"
      >
        <button
          @click="assignScoreToLevel(level.level,axes[employeeMetric as  keyof typeof axes])"
          :class="{
            [levelSelectorClass]: true,
            [levelSelectorActive]: scoreOfSet[index] === level.level,
          }"
        >
          {{ level.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  display: block;
}
</style>
