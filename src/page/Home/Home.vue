<style src="./Home.scss" module lang="scss"></style>
<script src="./Home.js"></script>

<template>
  <main :class="[$style.home]">
    <Hero
      :class="$style.hero"
      subtitle="Portfolio Mick Jasker"
      copy="Het laatste semester is alweer aangebroken. In dit portfolio laat ik alles zien wat ik dit semester gedaan heb."
      :call-to-actions="[
        {
          to: '/portfolio',
          copy: 'Bekijk mijn portfolio'
        }
      ]"
      :image="{
        x3: require('../../asset/image/hero@3x.jpg'),
        x2: require('../../asset/image/hero@2x.jpg'),
        src: require('../../asset/image/hero.jpg'),
      }"
    >
      Semester <span class="highlight">6</span><br>
      Startup Experience<span class="highlight">.</span>
    </Hero>
    <ArticleHighlight :class="$style.articleHighlight" />
    <VideoBlock :class="$style.videoBlock" />
  </main>
</template>
