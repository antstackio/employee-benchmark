<script setup lang="ts">
import { formLayoutClass } from "./formLayout.styles.css";
</script>

<template>
  <div :class="formLayoutClass">
    <slot></slot>
  </div>
</template>

<style scoped></style>
