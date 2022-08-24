<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import {
  setSelectorButtonContainer,
  setSelectorClass,
  activeSetClass,
  addMoreButton,
} from "./levelSelector.styles.css";

const store = useStore();

const metrics = computed(() => {
  return store.state.metrics;
});
const selectedSetIndex = computed(() => {
  return store.state.selectedIndex;
});
const setMetricActive = (index: number) => {
  store.commit("setSelectedIndex", { index });
};
const addSet = () => {
  store.commit("addSet", {});
};
</script>

<template>
  <div :class="setSelectorButtonContainer">
    <button
      @click="setMetricActive(index)"
      :class="{
        [setSelectorClass]: true,
        [activeSetClass]: selectedSetIndex === index,
      }"
      v-for="(metric, index) in metrics"
    >
      <i v-if="!metric.name">Untitled</i>
      <b v-else> {{ metric.name }}</b>
    </button>
    <button @click="addSet" :class="addMoreButton">+</button>
  </div>
</template>

<style scoped></style>
