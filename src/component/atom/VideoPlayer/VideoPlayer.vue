<style src="./VideoPlayer.scss" module lang="scss"></style>
<script src="./VideoPlayer.js"></script>

<template>
  <div :class="[$style.videoPlayer]">
    <VideoBlock
      ref="player"
      :class="$style.player"
      :src="src"
    />
  </div>
</template>
