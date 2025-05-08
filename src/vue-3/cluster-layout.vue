<script setup lang="ts">
import type { CSSProperties, NativeElements } from "vue";

const {
  align,
  justify,
  gap,
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
    class="cluster"
    :class="{
      'cluster-justify': justify,
      'cluster-align': align,
      'cluster-flow-exception': !!noWrap,
    }"
    :style="{
      '--flow-gap': gap,
      '--cluster-justify': justify,
      '--cluster-alignment': align,
    }"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<style scoped>
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--flow-gap, 1em);
  justify-content: var(--cluster-justify, flex-start);
}

.cluster-flow-exception {
  flex-wrap: nowrap;
}

.cluster-justify {
  --cluster-alignment: var(--cluster-alignment);
}

.cluster-align {
  align-items: var(--cluster-alignment, flex-start);
}
</style>
