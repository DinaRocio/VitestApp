<script setup lang="ts">
defineProps<{
  element: string;
  ariaLabel?: string;
  isDisable?: boolean;
}>();
</script>

<template>
  <component :is="element" :aria-label="ariaLabel" :disable="isDisable">
  </component>
</template>
