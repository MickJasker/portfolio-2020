<style src="./Quote.scss" module lang="scss"></style>
<script src="./Quote.js"></script>

<template>
  <blockquote :class="[$style.quote]">
    <div
      ref="copy"
      :class="[$style.copy]"
    >
      <slot />
    </div>
  </blockquote>
</template>
