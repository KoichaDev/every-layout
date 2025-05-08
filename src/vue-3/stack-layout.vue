<script setup lang="ts">
import type { NativeElements } from "vue";

const {
  is = "div",
  recursive,
  space,
  gap,
  size,
} = defineProps<{
  is?: keyof NativeElements;
  recursive?: boolean;
  space?: string;
  gap?: string;
  size?: "small" | "large";
}>();
</script>

<template>
  <component
    :is="is"
    class="stack"
    :class="{
      'stack-recursive': !!recursive,
      'stack-large': size === 'large',
      'stack-small': size === 'small',
    }"
    :style="{
      '--spacing-margin': space,
      '--spacing-gap': gap,
    }"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: var(--spacing-gap, 1em);
}

.stack > * {
  margin-block: 0;
}

.stack > * + * {
  margin-block-start: var(--spacing-margin);
}

.stack-recursive * + * {
  margin-block-start: var(--spacing-margin, 1em);
}

.stack-large > * + * {
  margin-block-start: 5rem;
}

.stack-small > * + * {
  margin-block-start: 0.5rem;
}
</style>
