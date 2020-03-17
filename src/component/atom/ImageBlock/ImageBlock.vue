<style src="./ImageBlock.scss" module lang="scss"></style>
<script src="./ImageBlock.js"></script>

<template>
  <figure :class="[$style.imageBlock]">
    <img
      ref="image"
      :src="$versionRoot + src"
      :alt="caption"
    >
    <figcaption
      v-if="caption"
      ref="caption"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>
