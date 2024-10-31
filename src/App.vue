<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Каталог</router-link> |
        <router-link to="/search">Пошук</router-link> |
        <router-link to="/add-part">Додавання</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script></script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: #ffffff;
  background-color: #1a1a4b;
  margin-top: 60px;
  padding: 20px;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin: 0 15px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
}

nav a.router-link-active {
  font-weight: bold;
  color: #ffffff;
}
</style>
