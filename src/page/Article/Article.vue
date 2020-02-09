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
      :image="{
        x3: require('../../asset/image/creative-jam@3x.jpg'),
        x2: require('../../asset/image/creative-jam@2x.jpg'),
        src: require('../../asset/image/creative-jam.jpg'),
      }"
    >
      <span class="highlight">{{ categoryFrm.title }}</span><br>{{ article.title }}<span class="highlight">.</span>
    </Hero>
    <ArticleStatistics
      v-if="article.statistics"
      :class="$style.articleStatistics"
      :read-time="article.statistics.readTime"
      :publish-date="new Date(article.statistics.publishDate)"
      :author="{
        name: 'Mick Jasker',
        img: require('../../asset/image/profile.jpg'),
      }"
    />
    <article ref="article">
      {{ article.content }}
    </article>
    <footer>
      <h1>Mick Jasker – {{ new Date().getFullYear() }}</h1>
    </footer>
  </main>
  <h1 v-else>
    Loading
  </h1>
</template>
