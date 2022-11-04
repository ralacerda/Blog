<script setup lang="ts">
defineProps({
  language: String,
  file: String,
});
</script>

<template>
  <div class="code-block">
    <div class="language">
      {{ language }}
    </div>
    <div class="code">
      <slot />
    </div>
  </div>
</template>
