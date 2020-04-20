<style src="./Paragraph.scss" module lang="scss"></style>
<script src="./Paragraph.js"></script>

<template>
  <div :class="[$style.paragraph, { [$style.introduction]: introduction }]">
    <p ref="copy">
      <slot />
    </p>
  </div>
</template>
