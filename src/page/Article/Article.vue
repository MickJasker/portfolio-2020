<style src="./Article.scss" module lang="scss"></style>
<script src="./Article.js"></script>

<template>
  <section
    v-if="article"
    :class="[$style.article]"
  >
    <header>
      <Hero
        ref="hero"
        :class="$style.hero"
        :subtitle="subcategoryFrm.title"
        :copy="article.copy"
        :image="{
          src: $versionRoot + article.image.src,
        }"
        @isReady="handleScrollComponentReady"
      >
        <span class="highlight">{{ categoryFrm.title }}.</span><br>{{ article.title }}<span class="highlight">{{ sentenceEnd }}</span>
      </Hero>
      <ArticleStatistics
        v-if="article.statistics"
        ref="statistics"
        :class="$style.articleStatistics"
        :read-time="readTime"
        :publish-date="new Date(article.statistics.publishDate)"
        :authors="article.authors"
        @isReady="handleScrollComponentReady"
      />
    </header>
    <main>
      <article ref="article">
        <component
          :is="component.name"
          v-for="(component, index) in article.content"
          :ref="`component-${component.name}-${index}`"
          :key="`component-${component.name}-${index}`"
          v-bind="component.props"
          @isReady="handleScrollComponentReady"
        >
          {{ component.content }}
        </component>
      </article>
    </main>
    <footer>
      <IntroductionBlock
        ref="introduction-block"
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
    </footer>
  </section>
  <h1 v-else>
    Error
  </h1>
</template>
