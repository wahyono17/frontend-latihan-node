<template>
  <div class="login-form">
    <h2 class="login-heading">Login</h2>
    <form action="#" @submit.prevent="login">

      <div class="form-control-manual">
        <label for="email">Username/Email</label>
        <input type="email" name="email" id="email" class="login-input" v-model="email">
      </div>

      <div class="form-control-manual mb-more">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="login-input" v-model="password">
      </div>

      <div class="form-control-manual">
        <button type="submit" class="btn-submit">Login</button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('retrieveToken', {
        email: this.email,
        password: this.password,
      })
        .then(response => {
          // console.log(response.data.token)
          this.$router.push({ name: 'productall' })
        })
    }
  }
}
</script>

