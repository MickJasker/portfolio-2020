<style src="./VideoOverlay.scss" module lang="scss"></style>
<script src="./VideoOverlay.js"></script>

<template>
  <div :class="[$style.videoOverlay]">
    <button
      :class="[$style.close]"
      @click="close"
    >
      <Icon name="close" />
    </button>
    <video
      ref="video"
      controls
    >
      <source
        :src="src"
        type="video/mp4"
      >
    </video>
    <progress
      max="100"
      :value="progress"
    />
  </div>
</template>
