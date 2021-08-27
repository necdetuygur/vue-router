<template>
  <div id="nav">
    <router-link to="/">Ana Sayfa</router-link>
    |
    <router-link to="/user">Kullanıcı</router-link>
    |
    <router-link to="/about">Hakkında</router-link>
  </div>
  <hr />
  <transition name="slide" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.25s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave-active {
  animation: slide-out 0.25s ease-out forwards;
  transition: opacity 0.5s;
  opacity: 0;
  position: absolute;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
