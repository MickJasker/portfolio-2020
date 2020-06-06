<style src="./PortfolioOverview.scss" module lang="scss"></style>
<script src="./PortfolioOverview.js"></script>

<template>
  <main :class="[$style.portfolioOverview]">
    <Hero
      ref="hero"
      :class="$style.hero"
      subtitle="Portfolio"
      copy="Het procres en de verantwoording van het afgelopen semester zijn vastgelegd in de leeswijzer."
      :call-to-actions="[
        {
          to: 'portfolio/stichting-ik-wil/overig/leeswijzer',
          copy: 'Leeswijzer Stichting Ik Wil'
        },
        {
          to: 'portfolio/pidz/overig/leeswijzer',
          copy: 'Leeswijzer PIDZ'
        }
      ]"
      :image="{
        x3: require('../../asset/image/berlin@3x.jpg'),
        x2: require('../../asset/image/berlin@2x.jpg'),
        src: require('../../asset/image/berlin.jpg'),
      }"
      @isReady="handleScrollComponentReady"
    >
      Mijn Werk<span class="highlight">.</span>
    </Hero>
    <!-- <Search
      ref="search"
      :class="$style.search"
      @isReady="handleScrollComponentReady"
    /> -->
    <div :class="$style.container">
      <section
        v-for="(category, index) in data.portfolio.categories"
        :key="`category-${category.title}-${index}`"
        :class="$style.category"
      >
        <Heading
          :ref="`category-title-${index}`"
          level="1"
          large
          @isReady="handleScrollComponentReady"
        >
          {{ category.title }}
        </Heading>
        <ArticleList
          v-for="(subcategory, index2) in category.subcategories"
          :key="`${category.title.split(' ').join('-')}-subcategory-${subcategory.title}-${index2}`"
          :ref="`${category.title.split(' ').join('-')}-subcategory-${subcategory.title}-${index2}`"
          :title="subcategory.title"
          :parent-category="category.title"
          :articles="subcategory.articles"
          :img="subcategory.img"
          @isReady="handleScrollComponentReady"
        />
      </section>
    </div>
  </main>
</template>
