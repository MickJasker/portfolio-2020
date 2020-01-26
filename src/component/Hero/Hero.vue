<style src="./Hero.scss" module lang="scss"></style>
<script src="./Hero.js"></script>

<template>
  <section :class="[$style.hero]">
    <main>
      <Subtitle
        :class="$style.subtitle"
        copy="S6 Startup Experience"
      />
      <h1 :class="$style.title">
        Mick Jasker
      </h1>
      <p :class="$style.copy">
        Het laatste semester is voor mij inmiddels aangebroken. In dit portfolio laat ik al het werk
        zien wat ik in dit semester gedaan heb.
      </p>
      <div :class="$style.callToAction">
        <Button
          to="/portfolio"
          copy="Bekijk mijn portfolio"
        />
      </div>
    </main>

    <picture :class="$style.heroImage">
      <source
        srcset="../../asset/image/hero@3x.jpg"
        media="(min-width: 768px)"
      >
      <source
        srcset="../../asset/image/hero@2x.jpg"
        media="(min-width: 465px)"
      >
      <img
        src="../../asset/image/hero.jpg"
        alt="hero"
      >
    </picture>
  </section>
</template>
