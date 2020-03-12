<style src="./Container.scss" module lang="scss"></style>
<script src="./Container.js"></script>

<template>
  <div :class="[$style.container]">
    <slot />
  </div>
</template>
