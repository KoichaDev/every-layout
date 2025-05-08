<script setup lang="ts">
import type { CSSProperties, NativeElements } from "vue";

const {
  is = "div",
  space = "1em",
  limit = "3",
  threshold = "30rem",
  align = "flex-start",
} = defineProps<{
  is?: keyof NativeElements;
  space?: CSSProperties["gap"];
  threshold?: CSSProperties["width" | "max-width"];
  align?: CSSProperties["align-items"];
  limit?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
}>();
</script>

<template>
  <component
    :is="is"
    class="switcher-layout"
    :class="{
      [`limit-${limit}`]: limit,
    }"
    v-bind="$attrs"
    :style="{
      '--container-breakpoint': threshold,
    }"
  >
    <slot />
  </component>
</template>

<style>
.switcher-layout {
  display: flex;
  flex-wrap: wrap;
  gap: v-bind(space);
  align-items: v-bind(align);
}

.switcher-layout > * {
  flex-grow: 1;
  flex-basis: calc((var(--container-breakpoint) - 100%) * 999);
}

.limit-1 > :nth-last-child(n + 2),
.limit-1 > :nth-last-child(n + 2) ~ * {
  flex-basis: 100%;
}

.limit-2 > :nth-last-child(n + 3),
.limit-2 > :nth-last-child(n + 3) ~ * {
  flex-basis: 100%;
}

.limit-3 > :nth-last-child(n + 4),
.limit-3 > :nth-last-child(n + 4) ~ * {
  flex-basis: 100%;
}

.limit-4 > :nth-last-child(n + 5),
.limit-4 > :nth-last-child(n + 5) ~ * {
  flex-basis: 100%;
}

.limit-5 > :nth-last-child(n + 6),
.limit-5 > :nth-last-child(n + 6) ~ * {
  flex-basis: 100%;
}

.limit-6 > :nth-last-child(n + 7),
.limit-6 > :nth-last-child(n + 7) ~ * {
  flex-basis: 100%;
}

.limit-7 > :nth-last-child(n + 8),
.limit-7 > :nth-last-child(n + 8) ~ * {
  flex-basis: 100%;
}

.limit-8 > :nth-last-child(n + 9),
.limit-8 > :nth-last-child(n + 9) ~ * {
  flex-basis: 100%;
}

.limit-9 > :nth-last-child(n + 10),
.limit-9 > :nth-last-child(n + 10) ~ * {
  flex-basis: 100%;
}

.limit-10 > :nth-last-child(n + 11),
.limit-10 > :nth-last-child(n + 11) ~ * {
  flex-basis: 100%;
}

.limit-11 > :nth-last-child(n + 12),
.limit-11 > :nth-last-child(n + 12) ~ * {
  flex-basis: 100%;
}

.limit-12 > :nth-last-child(n + 13),
.limit-12 > :nth-last-child(n + 13) ~ * {
  flex-basis: 100%;
}
</style>
    