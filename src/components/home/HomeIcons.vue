<template>
  <div class="icons">
    <div>
      <img
        class="icons__icon"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
        alt="Vue.js"
      />
    </div>

    <div>
      <img
        class="icons__icon"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
        alt="Node.js"
      />
    </div>

    <div>
      <img
        class="icons__icon"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
        alt="Express"
      />
    </div>

    <div>
      <img
        class="icons__icon"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
        alt="MongoDB"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__icon {
    margin: 0 20px;
    width: 80px;
    height: 80px;
  }
}
</style>
