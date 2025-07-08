<script setup lang="ts">
import type { CSSProperties } from 'vue'

type ColumnistLayoutProps = {
  is?: string
  order: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
  width?: CSSProperties['width'] | CSSProperties['maxWidth']
  gap?: CSSProperties['gap']
  columnGap?: CSSProperties['columnGap']
}

const {
  is = 'div',
  order = '2',
  width = '10em',
  gap = '1em',
  columnGap = '1em',
} = defineProps<ColumnistLayoutProps>()
</script>

<template>
  <component
    :is="is"
    class="msg-columnist-layout"
    :class="{
      'msg-column-gap': !!columnGap,
    }"
    :style="{
      '--flow-column-gap': !!columnGap,
    }"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<style scoped>
.msg-columnist-layout {
  --flow-gap: v-bind(gap);
  --column-width: v-bind(width);
  --column-order: v-bind(order);
  columns: var(--column-width, 10em) var(--column-order, 2);
  gap: var(--flow-gap, 3em);
}

.msg-column-gap {
  --flow-gap: 0;
  --column-gap: v-bind(columnGap);

  column-gap: var(--column-gap, 1em);
}
</style>
