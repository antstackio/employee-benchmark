<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { themeClass } from "./styles/theme.css";
import FormLayout from "./layouts/FormLayout.vue";
import RadarChart from "./components/charts/RadarChart.vue";
import { useStore } from "vuex";
import { computed, onMounted, reactive } from "vue";
import { axes } from "./definitions/employee-metrics";
import LevelSelector from "./components/inputs/LevelSelector.vue";
import { constructQuery, parseQuery } from "./utils/query-params";
import MetricInfo from "./components/info/MetricInfo.vue";

const store = useStore();
const shareAbleUrl = reactive({ url: "" });
onMounted(() => {
  const queryState = parseQuery();
  console.log(queryState);
  store.commit("initializeState", queryState);
});
const testFn = () => {
  console.log(constructQuery(store.state.metrics));
  const constructedUrl = constructQuery(store.state.metrics);
  shareAbleUrl.url = encodeURI(constructedUrl.href);
  copyToClipboard(shareAbleUrl.url);
};
const copyToClipboard = (str: string) => {
  const textArea = document.createElement("textarea");
  textArea.value = str;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  navigator.clipboard.writeText(str);
  textArea.remove();
};
</script>

<template>
  <div :class="themeClass">
    <FormLayout>
      <div>
        <LevelSelector />
      </div>
      <div>
        <button @click="testFn">Share</button>
        <!-- <p @click="copyToClipboard(shareAbleUrl.url)">{{ shareAbleUrl.url }}</p> -->
        <p v-if="shareAbleUrl.url"><small>COPIED TO CLIPBOARD</small></p>
        <RadarChart />
        <MetricInfo />
      </div>
    </FormLayout>
  </div>
</template>

<style scoped></style>
