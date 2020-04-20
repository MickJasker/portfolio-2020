<style src="./Search.scss" module lang="scss"></style>
<script src="./Search.js"></script>

<template>
  <form :class="$style.search">
    <label>
      <input
        type="search"
        placeholder="Op zoek naar iets specefieks?"
      >
      <button><Icon name="search" /></button>
    </label>
  </form>
</template>
