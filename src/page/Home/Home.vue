<style src="./Home.scss" module lang="scss"></style>
<script src="./Home.js"></script>

<template>
  <main :class="[$style.home]">
    <Hero
      ref="Hero"
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
      @isReady="handleScrollComponentReady"
    >
      Semester <span class="highlight">6</span><br>
      Startup Experience<span class="highlight">.</span>
    </Hero>
    <ArticleHighlight
      ref="ArticleHighlight"
      :class="$style.articleHighlight"
      @isReady="handleScrollComponentReady"
    />
    <VideoBlock
      ref="videoBlock"
      :class="$style.videoBlock"
      src="video/creative-jam.mp4"
      @isReady="handleScrollComponentReady"
    />
    <IntroductionBlock
      ref="introductionBlock"
      heading="Ik zal me even voorstellen"
      :class="$style.introduction"
      :src="require('../../asset/image/profile.jpg')"
      @isReady="handleScrollComponentReady"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse quis auctor lorem.
      Nullam quis ipsum nec orci porttitor mollis. Ut nec mi eu lacus bibendum fermentum.
      Integer hendrerit elit quis urna euismod, id tristique mi imperdiet. Ut a turpis
      sodales, feugiat ipsum ut, pulvinar nisi. Sed non placerat sem. Aliquam elementum
      ligula nec erat gravida commodo. Donec mattis est turpis. Aliquam condimentum,
      ex nec laoreet dignissim, odio enim aliquam mi, vel posuere felis tortor quis
      libero.
    </IntroductionBlock>
  </main>
</template>
