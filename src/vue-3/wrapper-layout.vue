<script setup lang="ts">
import type { CSSProperties, NativeElements } from "vue";

const {
  is = "div",
  maxWidth = "85em",
  gutter = 0,
  noWrap,
} = defineProps<{
  is?: keyof NativeElements;
  maxWidth?: CSSProperties["maxWidth"];
  gutter?: CSSProperties["paddingLeft"] | CSSProperties["paddingRight"];
  noWrap?: boolean;
}>();
</script>

<template>
  <component
    :is="is"
    class="wrapper-l"
    :class="{
      'wrapper-l-flow-exception': !!noWrap,
    }"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<style scoped>
.wrapper-l {
  position: relative;
  margin-inline: auto;
  max-width: v-bind(maxWidth);
  padding-left: v-bind(gutter);
  padding-right: v-bind(gutter);
}

.wrapper-l-flow-exception {
  margin-inline: 0;
}
</style>
