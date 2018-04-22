<template>
  <div class="footer-container">
    <footer class="the-footer">
      <div>
        <span>&copy; Copyright Laurel Springs Animal Hospital</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style scoped>
.header-container {
  height: 60px;
}

.the-footer {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
  bottom: 0;
  color: white;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: #00cba9;
}
</style>
