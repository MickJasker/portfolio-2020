<style src="./IntroductionBlock.scss" module lang="scss"></style>
<script src="./IntroductionBlock.js"></script>

<template>
  <section :class="[$style.introductionBlock]">
    <main>
      <Heading
        ref="heading"
        level="1"
      >
        {{ heading }}<span class="highlight">.</span>
      </Heading>

      <div :class="$style.content">
        <p ref="copy">
          <slot />
        </p>
      </div>
      <div
        ref="cta"
        class="cta-wrapper"
      >
        <Button
          to="/about"
          copy="Lees meer over mij"
        />
      </div>
    </main>
    <aside
      v-if="src"
      ref="image"
    >
      <ColorImage
        :class="$style.image"
        :src="src"
      />
    </aside>
  </section>
</template>
