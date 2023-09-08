<template>
    <section class="error-page">
        <img src="/assets/images/ghost-img.png" alt="">
        <div class="shadow" />
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.error-page {
    justify-self: center;
    width: 100%;
    height: calc(100% - 14vh);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 1;
}

.error-page img {
  position: relative;
  z-index: 99;
  width: 230px;
  animation: floaty 1.8s infinite alternate;
}

.error-page .shadow {
  width: 130px;
  height: 24px;
  background-color: hsla(38, 21%, 19%, .16);
  margin: 0 auto;
  border-radius: 50%;
  filter: blur(7px);
  animation: shadow 1.8s infinite alternate;
}
/* Animate ghost */
@keyframes floaty {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(15px);
  }
}

@keyframes shadow {
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(.85, .85);
  }
}

@media screen and (min-width: 1024px) {
  .error-page img {
    width: 400px;
  }
  .error-page .shadow {
    width: 250px;
    height: 40px;
  }
}
</style>