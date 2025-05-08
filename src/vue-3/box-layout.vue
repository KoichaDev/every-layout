<script setup lang="ts">
import { useTemplateRef } from "vue";
import type { CSSProperties, NativeElements } from "vue";

const {
  is = "div",
  padding = "1em",
  borderWidth = 0,
  invert,
} = defineProps<{
  is?: keyof NativeElements;
  padding?: CSSProperties["padding"];
  borderWidth?: CSSProperties["borderWidth"];
  invert?: boolean;
}>();

const nativeElementRef = useTemplateRef<NativeElements>("native-element-ref");

defineExpose({ nativeElementExposeRef: nativeElementRef });
</script>

<template>
  <component
    ref="native-element-ref"
    :is="is"
    class="box-l"
    :class="{
      invert: invert ?? 'invert',
    }"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<style scoped>
.box-l {
  padding: v-bind(padding);
  border: v-bind(borderWidth) solid;
  color: var(--neutrals-foreground-primary, #0d0d0e);
}

.invert {
  color: var(--neutrals-background-primary, #fff);
  background-color: var(--neutrals-foreground-primary, #0d0d0e);
}
</style>
