<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

import { employeeMetrics, axes } from "../../definitions/employee-metrics";

const store = useStore();

const scoreOfSet = computed(() => store.getters.getScoreOfSet());
</script>

<template>
  <ul>
    <li v-if="scoreOfSet[0] > 0">
      <b>
        {{
          employeeMetrics[axes["TECHNOLOGY"]].levels[scoreOfSet[0] - 1].title
        }}</b
      >: {{ " " }}
      {{
        employeeMetrics[axes["TECHNOLOGY"]].levelsMeta[scoreOfSet[0]]
          .description
      }}
    </li>
    <li v-if="scoreOfSet[1] > 0">
      <b>
        {{ employeeMetrics[axes["SYSTEM"]].levels[scoreOfSet[1] - 1].title }}</b
      >: {{ " " }}
      {{
        employeeMetrics[axes["SYSTEM"]].levelsMeta[scoreOfSet[1]].description
      }}
    </li>
    <li v-if="scoreOfSet[2] > 0">
      <b>
        {{ employeeMetrics[axes["PEOPLE"]].levels[scoreOfSet[2] - 1].title }}</b
      >: {{ " " }}
      {{
        employeeMetrics[axes["PEOPLE"]].levelsMeta[scoreOfSet[2]].description
      }}
    </li>
    <li v-if="scoreOfSet[3] > 0">
      <b>
        {{
          employeeMetrics[axes["PROCESS"]].levels[scoreOfSet[3] - 1].title
        }}</b
      >: {{ " " }}
      {{
        employeeMetrics[axes["PROCESS"]].levelsMeta[scoreOfSet[3]].description
      }}
    </li>
    <li v-if="scoreOfSet[4] > 0">
      <b>
        {{
          employeeMetrics[axes["INFLUENCE"]].levels[scoreOfSet[4] - 1].title
        }}</b
      >: {{ " " }}
      {{
        employeeMetrics[axes["INFLUENCE"]].levelsMeta[scoreOfSet[4]].description
      }}
    </li>
  </ul>
</template>

<style scoped>
ul,
li {
  color: var(--color-font);
}
</style>
