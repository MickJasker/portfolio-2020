<style src="./Article.scss" module lang="scss"></style>
<script src="./Article.js"></script>

<template>
  <main
    v-if="article"
    :class="[$style.article]"
  >
    <Hero
      :class="$style.hero"
      :subtitle="subcategoryFrm.title"
      :copy="article.copy"
      :image="{
        src: article.image.src,
      }"
    >
      <span class="highlight">{{ categoryFrm.title }}</span><br>{{ article.title }}<span class="highlight">{{ sentenceEnd }}</span>
    </Hero>
    <ArticleStatistics
      v-if="article.statistics"
      :class="$style.articleStatistics"
      :read-time="readTime"
      :publish-date="new Date(article.statistics.publishDate)"
      :author="{
        name: 'Mick Jasker',
        img: require('../../asset/image/profile.jpg'),
      }"
    />
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
    <footer>
      <h1>Mick Jasker – {{ new Date().getFullYear() }}</h1>
    </footer>
  </main>
  <h1 v-else>
    Error
  </h1>
</template>
