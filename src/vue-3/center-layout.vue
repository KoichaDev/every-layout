<script setup lang="ts">
import type { CSSProperties, NativeElements } from "vue";

const {
  is = "div",
  max, // A CSS max-width value
  textCenter, // Center align the text too (text-align: center)
  gutters = "0", // The minimum space on either side of the content
  intrinsic, // Center child elements based on their content width
} = defineProps<{
  is?: keyof NativeElements;
  max?: CSSProperties["maxInlineSize"];
  textCenter?: boolean;
  gutters?: string;
  intrinsic?: boolean;
}>();
</script>

<template>
  <component
    :is="is"
    class="center-l"
    :class="{
      'text-center': textCenter,
      intrinsic: !!intrinsic,
      gutters: !!gutters,
    }"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<style scoped>
.center-l {
  box-sizing: content-box;
  margin-inline: auto;
  max-inline-size: v-bind(max);
}

.text-center {
  text-align: center;
}

.gutters {
  padding-inline: v-bind(gutters);
}

.intrinsic {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
