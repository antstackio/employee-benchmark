<script setup lang="ts">
import { levelSelectorClass } from "./levelSelector.styles.css";
</script>

<template>
  <button :class="levelSelectorClass"><slot></slot></button>
</template>

<style scoped></style>
