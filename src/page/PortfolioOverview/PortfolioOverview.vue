<style src="./PortfolioOverview.scss" module lang="scss"></style>
<script src="./PortfolioOverview.js"></script>

<template>
  <main :class="[$style.portfolioOverview]">
    <Hero
      :class="$style.hero"
      subtitle="Portfolio"
      :image="{
        x3: require('../../asset/image/brandenburg-tor@3x.jpg'),
        x2: require('../../asset/image/brandenburg-tor@2x.jpg'),
        src: require('../../asset/image/brandenburg-tor.jpg'),
      }"
    >
      Mijn Werk<span class="highlight">.</span>
    </Hero>
    <Search :class="$style.search" />
  </main>
</template>
