<template>
  <nav id="nav">
    <p class="logo">Vue School - Router Class</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li 
        v-for="destination in destinations"
        :key="destination.name"
        class="links"
      >
        <router-link :to="{name: 'DestinationDetails', params: {slug: destination.slug}}">
          {{destination.name}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from '@/store.js';

export default {
  data() {
    return {
      // destinationId: this.$route.params.id,
      destinations: store.destinations
    }
  }
}
</script>

<style scoped>
  #nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }

  #nav a.vue-link-active {
    color: #42b983;
  }

  .nav-links {
    display: flex;
  }

  .links {
    padding-right: 20px;
    list-style: none;
  }

  .links:hover {
    text-decoration: underline;
  }

  .logo {
    font-size: 20px;
    color: purple;
    font-weight: bold;
  }

</style>