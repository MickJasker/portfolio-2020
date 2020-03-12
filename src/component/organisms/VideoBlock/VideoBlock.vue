<style src="./VideoBlock.scss" module lang="scss"></style>
<script src="./VideoBlock.js"></script>

<template>
  <section :class="[$style.videoBlock]">
    <VideoOverlay
      ref="videoOverlay"
      :src="require('../../../asset/video/creative-jam.mp4')"
    />
    <main
      ref="button"
      @click="playVideo"
    >
      <PlayButton :class="[$style.button]" />
    </main>
    <video
      ref="bg-video"
      :class="$style.thumbnail"
      muted
      autoplay
      loop
    >
      <source
        src="../../../asset/video/creative-jam.mp4"
        media="(min-width: 768px)"
      >
    </video>
  </section>
</template>
