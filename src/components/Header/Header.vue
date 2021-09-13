<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="mb-2">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Главная</b-nav-item>
        <b-nav-item to="/login">Вход</b-nav-item>
        <b-nav-item to="/register">Регистрация</b-nav-item>
        <b-nav-item to="/profile">Профиль</b-nav-item>
        <b-nav-item to="/list">Список Шиндлера</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>

</style>