<style src="./AboutPage.scss" module lang="scss"></style>
<script src="./AboutPage.js"></script>

<template>
  <div :class="[$style.aboutPage]">
    <h2>AboutPage</h2>
    <ScrollWrapper ref="scroll" @isReady="handleScrollComponentReady">
      <h2>test</h2>
      <h2>test</h2>
      <h2>test</h2>
      <h2>test</h2>
      <h2>test</h2>
      <h2>test</h2>
      <h2>test</h2>
      <h2>test</h2>
      <h2>test</h2>
    </ScrollWrapper>
  </div>
</template>
