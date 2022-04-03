<template>
  <div class="page-center">
    <div class="d-flex justify-content-center align-content-center flex-column">
      <img
        alt="logo"
        class="col col-12 m-0 m-auto"
        data-testid="logo"
        :src="'/image/github-logo.png'"
      />

      <div class="col-auto m-0 m-auto mt-3">
        <router-link to="/users">
          <button class="btn btn-lg btn-outline-dark">Github Users</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
