<style src="./Article.scss" module lang="scss"></style>
<script src="./Article.js"></script>

<template>
  <main :class="[$style.article]">
    <Hero
      :class="$style.hero"
      subtitle="Dutch Design Week"
      copy="During the Dutch Design Week (DDW), four classmates and I got the opportunity to participate with the Adobe Creative Jam at Sint Lucas. We got a case presented by the lead UX designer from Philips Hue. He defined a problem where users were taking the starter pack – which contained three bulbs – and spread them around the house while the best possible experience is to hang the lamps in the same room."
      :image="{
        x3: require('../../asset/image/creative-jam@3x.jpg'),
        x2: require('../../asset/image/creative-jam@2x.jpg'),
        src: require('../../asset/image/creative-jam.jpg'),
      }"
    >
      <span class="highlight">Philips</span>/<span class="highlight">Adobe</span><br> Creative
      Jam<span class="highlight">.</span>
    </Hero>
    <ArticleStatistics
      :class="$style.articleStatistics"
      :read-time="120"
      :publish-date="new Date('10/18/2019')"
      :author="{
        name: 'Mick Jasker',
        img: require('../../asset/image/profile.jpg'),
      }"
    />
    <article ref="article">
      <h1>How was DMIS developed?</h1>
      <p>
        Milton J. Bennett developed the Development Model of Intercultural Sensitivity (DMIS)
        with a grounded theory approach, which means that theoretical concepts are used to explain
        an emerging pattern from systematic observations. Bennet described the patterns he
        observed into six stages: denial, defense, minimization, acceptance, adaptation, and
        integration.
      </p>
      <h1>What was the intention of the writer?</h1>
      <p>The author’s intention is made clear in the first paragraph of the article:</p>
      <blockquote>
        <p>
          After years of observing all kinds of people dealing (or not) with cross-cultural
          situations, I decided to try to make sense of what was happening to them. I wanted to
          explain why some people seemed to get a lot better at communicating across cultural
          boundaries while other people didn’t improve at all, and I thought that if I were able
          to explain why this happened, trainers and educators could do a better job of preparing
          people for cross-cultural encounters.
        </p>
      </blockquote>
      <figure>
        <img
          src="../../asset/image/hero@3x.jpg"
          alt="test"
        >
        <figcaption>Een Startup kantoor</figcaption>
      </figure>
      <h1>What are the major discussion points?</h1>
      <p>In the article, there are multiple points of discussion.</p>
      <ul>
        <li>
          People can perceive the two ends: ethnocentrism and ethnorelativism to good or bad,
          but this is not the case.
        </li>
        <li>Minimization is often confused with the acceptance stage.</li>
      </ul>
      <h1>Describe your stage in the model?</h1>
      <p>
        I would set myself between minimization and acceptance. Because I’m aware of the
        difference between cultures around me, but in practice, I don’t have much contact with
        people of different backgrounds. This is a <a href="#">link</a>.
      </p>
      <h2>Examples</h2>
      <ul>
        <li>
          I grew up in a liberal-oriented family where acceptance of other people’s backgrounds
          is important.
        </li>
        <li>
          I’ve only traveled outside of Europe once, that’s why I only have minimal experience
          with other cultures besides European cultures.
        </li>
      </ul>
      <h1>Possibilities to evolve to the next stage</h1>
      <p>
        Something I want to do where I can rise to the next stage, either full acceptance or
        adaptation, is to do my graduation internship abroad. Temporarily moving to another
        country forces me to adapt to the different cultures around me and broaden my
        perspective.
      </p>
      <figure>
        <img
          src="../../asset/image/hero@3x.jpg"
          alt="test"
        >
        <figcaption>Een Startup kantoor</figcaption>
      </figure>
    </article>
    <footer>
      <h1>Mick Jasker – {{ new Date().getFullYear() }}</h1>
    </footer>
  </main>
</template>
