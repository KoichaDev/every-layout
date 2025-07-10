<script setup lang="ts">
import type { CSSProperties } from "vue";

const {
  repeat = "auto-fit",
  gap = "1em",
  min = "25em",
  max = "1fr",
} = defineProps<{
  repeat?: "auto-fit" | "auto-fill" | ({} & string);
  gap?: CSSProperties["gap"];
  min?: string;
  max?: string;
}>();
</script>

<template>
  <div class="grid-layout">
    <slot />
  </div>
</template>

<style scoped>
.grid-layout {
  --gap: v-bind(gap);
  --repeat: v-bind(repeat);
  --max: v-bind(max);
  --min: v-bind(min);

  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: repeat(var(--repeat), minmax(var(--min), var(--max)));
}
</style>
