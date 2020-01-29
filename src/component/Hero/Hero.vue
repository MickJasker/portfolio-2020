<style src="./Hero.scss" module lang="scss"></style>
<script src="./Hero.js"></script>

<template>
  <section :class="[$style.hero]">
    <main>
      <div class="subtitle-wrapper" ref="subtitle">
        <Subtitle
          v-if="subtitle"
          :class="$style.subtitle"
          :copy="subtitle"
        />
      </div>
      <h1
        ref="title"
        :class="$style.title"
      >
        <slot />
      </h1>
      <p
        v-if="copy"
        ref="copy"
        :class="$style.copy"
      >
        {{ copy }}
      </p>
      <div
        v-if="callToActions"
        :class="$style.callToAction"
      >
        <div
          v-for="(callToAction, index) in callToActions"
          :key="`${$route.name}-hero-cta-${index}`"
          ref="cta"
          class="cta-wrapper"
        >
          <Button
            :to="callToAction.to"
            :copy="callToAction.copy"
          />
        </div>
      </div>
    </main>

    <picture
      v-if="image"
      :class="$style.heroImage"
    >
      <source
        v-if="image.x3"
        :srcset="image.x3"
        media="(min-width: 768px)"
      >
      <source
        v-if="image.x2"
        :srcset="image.x2"
        media="(min-width: 465px)"
      >
      <img
        :src="image.src"
        alt="hero"
      >
    </picture>
  </section>
</template>
