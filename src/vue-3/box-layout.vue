<script setup lang="ts">
import { useTemplateRef } from "vue";
import type { CSSProperties, NativeElements } from "vue";

const {
  is = "div",
  padding = "1em",
  borderWidth = 0,
  paddingBlock,
  paddingInline,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  invert,
} = defineProps<{
  is?: keyof NativeElements | NveComponentName;
  padding?: CSSProperties["padding"];
  paddingBlock?: CSSProperties["paddingBlock"];
  paddingInline?: CSSProperties["paddingInline"];
  borderWidth?: CSSProperties["borderWidth"];
  paddingTop?: CSSProperties["paddingTop"];
  paddingRight?: CSSProperties["paddingRight"];
  paddingLeft?: CSSProperties["paddingLeft"];
  paddingBottom?: CSSProperties["paddingBottom"];
  invert?: boolean;
}>();

const nativeElementRef = useTemplateRef<NativeElements>("native-element-ref");

defineExpose({ nativeElementExposeRef: nativeElementRef });
</script>

<template>
  <component
    ref="native-element-ref"
    :is="is"
    class="box-layout"
    :class="{
      invert: invert ?? 'invert',
      'box-padding-block': paddingBlock,
      'box-padding-inline': paddingInline,
      'box-padding-top': paddingTop,
      'box-padding-right': paddingRight,
      'box-padding-bottom': paddingBottom,
      'box-padding-left': paddingLeft,
    }"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<style scoped>
.box-layout {
  padding: v-bind(padding);
  border: v-bind(borderWidth) solid;
  color: var(--neutrals-foreground-primary, #0d0d0e);
}

.box-padding-top {
  padding: 0;
  padding-top: v-bind(paddingTop);
}

.box-padding-right {
  padding: 0;
  padding-right: v-bind(paddingRight);
}

.box-padding-left {
  padding: 0;
  padding-left: v-bind(paddingLeft);
}

.box-padding-bottom {
  padding: 0;
  padding-bottom: v-bind(paddingBottom);
}

.box-padding-block {
  padding: 0;
  padding-inline: v-bind(paddingInline);
  padding-block: v-bind(paddingBlock);
}

.box-padding-inline {
  padding: 0;
  padding-block: v-bind(paddingBlock);
  padding-inline: v-bind(paddingInline);
}

.invert {
  color: var(--neutrals-background-primary, #fff);
  background-color: var(--neutrals-foreground-primary, #0d0d0e);
}
</style>
