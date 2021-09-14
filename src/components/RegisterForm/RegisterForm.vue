<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Придумайте логин:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.login" 
          placeholder="логин"
          required
          :state="loginValidation"
        ></b-form-input>
        <b-form-invalid-feedback :state="loginValidation">
        От 6 до 13 символов
      </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-2" label="Придумайте пароль:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="пароль"
          :state="passValidation"
          type="password"
          required
        ></b-form-input>
        <b-form-invalid-feedback :state="passValidation">
        От 6 символов
      </b-form-invalid-feedback>
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
      onReset(event) {
        event.preventDefault()
        this.form.name = ''
        this.form.password = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      onSubmit(event) {
        event.preventDefault()
        authAdapter.setRegistration({
            login: this.form.login,
            password: this.form.password,
        })
        alert('registred successfully!')
        },
      getUser() {
          console.log(authAdapter.getUserData('adminnnnn'))
      }
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