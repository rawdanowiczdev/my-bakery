<template>
  <div class="container">
    <slot name="decorator"></slot>

    <header class="title">
      <slot name="title"></slot>
    </header>

    <slot name="button"></slot>

    <section class="section">
      <slot name="section"></slot>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin: 5vh auto;
}

.section {
  margin: 10px;
  max-width: 680px;
  text-align: justify;
}
</style>
