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
const metrics = computed(() => {
  return store.state.metrics;
});
const chartData = computed(() => {
  return {
    labels: Object.values(axes),
    datasets: store.state.metrics.map(
      (metric: any, index: number) =>
        constructDataSet(
          store.getters.getNameOfSet(index),
          store.getters.getScoreOfSet(index),
          index
        ) as any
    ),
  };
});
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  backgroundColor: "#242424",
  scales: {
    r: {
      backgroundColor: "#242424",
      ticks: {
        display: false,
        stepSize: 1,
        fontSize: "32",
      },
      grid: {
        lineWidth: 2,
        color: "rgba(255, 255, 255,.6)",
      },
      pointLabels: {
        backdropColor: "#242424",
        color: "rgba(255, 255, 255,.6)",
        font: {
          size: 18,
        },
      },
      suggestedMin: 0,
      suggestedMax: 5,
    },
  },
  elements: {
    line: {
      borderWidth: 3,
    },
  },
};
</script>
<template>
  <div class="radar-background">
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
  </div>
</template>

<style scoped>
.radar-background {
  background-color: #242424;
}
</style>
