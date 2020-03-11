<style src="./ArticlePage.scss" module lang="scss"></style>
<script src="./ArticlePage.js"></script>

<template>
  <main :class="[$style.articlePage]">
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
      <section
        v-for="(category, index) in data.portfolio.categories"
        :key="`category-${category.title}-${index}`"
        :class="$style.category"
      >
        <h1>{{ category.title }}</h1>
        <ArticleList
          v-for="(subcategory, index2) in category.subcategories"
          :key="`subcategory-${subcategory.title}-${index2}`"
          :ref="`subcategory-${subcategory.title}-${index2}`"
          :title="subcategory.title"
          :parent-category="category.title"
          :articles="subcategory.articles"
          :img="subcategory.img"
          @isReady="handleScrollComponentReady"
        />
      </section>
      <!--      <ScrollWrapper-->
      <!--        @isReady="handleScrollComponentReady"-->
      <!--        ref="component-test"-->
      <!--      >-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--        <h2>Test</h2>-->
      <!--      </ScrollWrapper>-->
      <!--      <ScrollWrapper-->
      <!--        v-for="(component, index) in article.content"-->
      <!--        :key="`component-${component.name}-${index}`"-->
      <!--        :ref="`componentWrapper${index}`"-->
      <!--        @isReady="handleScrollComponentReady"-->
      <!--      >-->
      <!--        <h1>hekko</h1>-->
      <!--        <component-->
      <!--          :is="component.name"-->
      <!--          :ref="`component${index}`"-->
      <!--          v-bind="component.props"-->
      <!--        >-->
      <!--          {{ component.content }}-->
      <!--        </component>-->
      <!--      </ScrollWrapper>-->
    </article>
    <footer>
      <h1>Mick Jasker – {{ new Date().getFullYear() }}</h1>
    </footer>
  </main>
</template>
