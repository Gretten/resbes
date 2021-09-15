<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Логин:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.login" 
          placeholder="Введите логин"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Пароль:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Введите пароль"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" class="mt-2" >Подтвердить</b-button>
    </b-form>
  </div>
</template>

<script>
  import authAdapter from '@/api/Local/AuthAdapter/AuthAdapter'
  export default {
    data() {
      return {
        form: {
          login: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        const isLoggedIn = authAdapter.checkLoginAndPass({
            login: this.form.login,
            password: this.form.password,
        })
        if(!isLoggedIn) {
          alert('Попробуйте еще раз!')
        } else {
          this.$store.commit('setUsername', this.form.login)
          this.$store.commit('setAuth')
          this.$router.push('/profile')  
        }
      },
      onReset(event) {
        event.preventDefault()
        this.form.email = ''
        this.form.name = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
    },
    computed: {
      passValidation() {
        return this.form.password.length > 4 && this.form.password.length < 13
      },
      loginValidation() {
        return this.form.login.length > 8
      }
    }
  }
</script>