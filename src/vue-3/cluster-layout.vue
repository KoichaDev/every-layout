<script setup lang="ts">
import type { CSSProperties, NativeElements } from "vue";

const {
  align = "flex-start",
  justify = "flex-start",
  gap = "1em",
  is = "div",
  noWrap,
} = defineProps<{
  is?: keyof NativeElements;
  justify?: CSSProperties["justify-content"];
  align?: CSSProperties["align-items"];
  gap?: string;
  noWrap?: boolean;
}>();
</script>

<template>
  <component
    :is="is"
    class="cluster-layout"
    :class="{
      'cluster-justify': justify,
      'cluster-align': align,
    }"
    :data-wrap="noWrap ? 'exception' : null"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<style scoped>
.cluster-layout {
  display: flex;
  flex-wrap: wrap;
  gap: v-bind(gap);
  justify-content: flex-start;
}

[data-wrap="exception"] {
  flex-wrap: nowrap;
}

.cluster-justify {
  justify-content: v-bind(justify);
}

.cluster-align {
  align-items: v-bind(align);
}
</style>
