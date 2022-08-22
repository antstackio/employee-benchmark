<script setup lang="ts">
import { Radar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement,
  Plugin,
  Filler,
} from "chart.js";
import { computed, PropType } from "vue";
import { constructDataSet } from "../../utils/strings";
import { useStore } from "vuex";
import { axes } from "../../definitions/employee-metrics";

const props = defineProps<{
  chartId?: string;
  width?: number;
  height?: number;
  cssClasses?: string;
  styles?: Partial<CSSStyleDeclaration>;
  plugins?: Plugin<"radar">[];
  datasets?: number[];
  label?: string;
}>();
const store = useStore();
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement,
  Filler
);
const chartData = computed(() => {
  return {
    labels: Object.values(axes),
    datasets: constructDataSet(
      props.label || "",
      store.getters.getScoreOfSet
    ) as any,
  };
});
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      ticks: {
        display: false,
        stepSize: 1,
      },
      suggestedMin: 0,
      suggestedMax: 5,
    },
  },
};
</script>
<template>
  <Radar
    :chart-data="chartData"
    :chart-options="chartOptions"
    :chart-id="props.chartId"
    :width="props.width"
    :height="props.height"
    :css-classes="props.cssClasses"
    :styles="props.styles"
    :plugins="props.plugins"
  ></Radar>
</template>

<style scoped></style>
