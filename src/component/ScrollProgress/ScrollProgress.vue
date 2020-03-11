<style src="./ScrollProgress.scss" module lang="scss"></style>
<script src="./ScrollProgress.js"></script>

<template>
  <div :class="[$style.scrollProgress]">
    <span
      :class="[$style.progress]"
      :style="{
        width: `${progress}%`
      }"
    />
  </div>
</template>
