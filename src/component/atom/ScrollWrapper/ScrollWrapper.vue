<style src="./ScrollWrapper.scss" module lang="scss"></style>
<script src="./ScrollWrapper.js"></script>

<template>
  <div :class="[$style.scrollWrapper]">
    <slot />
  </div>
</template>
