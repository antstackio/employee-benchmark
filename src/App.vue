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
import SetSelector from "./components/inputs/SetSelector.vue";

const store = useStore();
const shareAbleUrl = reactive({ url: "" });
onMounted(() => {
  const queryState = parseQuery();

  store.commit("initializeState", queryState);
});
const testFn = () => {
  const constructedUrl = constructQuery(store.state.metrics);
  shareAbleUrl.url = constructedUrl.href;
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
        <SetSelector />
        <LevelSelector />
      </div>
      <div>
        <div class="action-button-container">
          <button @click="testFn">Share</button>
        </div>
        <!-- <p @click="copyToClipboard(shareAbleUrl.url)">{{ shareAbleUrl.url }}</p> -->
        <p v-if="shareAbleUrl.url"><small>COPIED TO CLIPBOARD</small></p>
        <RadarChart css-classes="radar-class" />
        <MetricInfo />
      </div>
    </FormLayout>
  </div>
</template>

<style scoped>
.radar-class {
  color: white;
}
.action-button-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
}
</style>
