<style src="./ColorImage.scss" module lang="scss"></style>
<script src="./ColorImage.js"></script>

<template>
  <div :class="[$style.colorImage]">
    <img
      :src="src"
      :class="$style.img"
      alt=""
    >
  </div>
</template>
