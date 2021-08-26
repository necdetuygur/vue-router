<template>
  <div id="nav">
    <router-link to="/">Ana Sayfa</router-link>
    |
    <router-link to="/user">Kullanıcı</router-link>
    |
    <router-link to="/about">Hakkında</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
