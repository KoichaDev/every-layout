<script setup lang="ts">
type ColumnsNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ColumnsString = `${ColumnsNumber}`;

type Columns = ColumnsString | ColumnsNumber;

const { columns } = defineProps<{ columns: Columns }>();
</script>

<template>
  <div class="grid-layout" :style="{ '--columns': +columns }">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.grid-layout {
  --width: 25em;
  --gap: 1em;
  --min-column-width: calc((var(--width) / var(--columns)) - var(--gap));

  display: grid;
  gap: var(--gap);
  grid-template-columns: repeat(auto-fit, minmax(var(--min-column-width), 1fr));

  > * {
    min-width: 0;
  }
}
</style>
