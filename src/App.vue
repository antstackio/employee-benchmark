<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { themeClass } from "./styles/theme.css";
import FormLayout from "./layouts/FormLayout.vue";
import RadarChart from "./components/charts/RadarChart.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { axes } from "./definitions/employee-metrics";
import LevelSelector from "./components/inputs/LevelSelector.vue";

const store = useStore();
</script>

<template>
  <div :class="themeClass">
    <FormLayout>
      <div>
        <LevelSelector />
      </div>
      <RadarChart />
    </FormLayout>
  </div>
</template>

<style scoped></style>
