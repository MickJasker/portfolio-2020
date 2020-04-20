<style src="./ReadGuide.scss" module lang="scss"></style>
<script src="./ReadGuide.js"></script>

<template>
  <div :class="[$style.readGuide]">
    <Hero
      ref="Hero"
      :class="$style.hero"
      subtitle="Leeswijzer"
      :image="{
        x3: require('../../asset/image/hero@3x.jpg'),
        x2: require('../../asset/image/hero@2x.jpg'),
        src: require('../../asset/image/hero.jpg'),
      }"
      @isReady="handleScrollComponentReady"
    >
      Stichting Ik Wil<br>
      <span class="highlight">Leesgeest.</span>
    </Hero>
  </div>
</template>
