<template>
  <q-page
    class="flex justify-center">
    <div>
      <q-card bordered  flat class="q-mt-md q-py-md q-px-lg">
        <q-card-section>
          <div class="text-center text-h5">
            <div class="flex justify-between q-pr-xl items-center">
              <q-icon size="md" name="img:img/logo.png" dir=""/>
              Login
            </div>

          </div>
          <q-input
            label="email"
            placeholder="email@example.com"
            type="email"
            v-model="username"
          />
          <q-input
            label="password"
            type="password"
            v-model="password"
          />
          <div class="q-mt-md">
            <q-btn flat bordered class="q-ma-xs" color="primary" @click="handleLogin">login</q-btn>
            <q-btn flat class="q-ma-xs">sign up</q-btn>
          </div>

        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import AuthService from '../services/api.service'
import { ref } from 'vue'

export default {
  setup () {
    const username = ref(null)
    const password = ref(null)
    return {
      username,
      password,

      handleLogin () {
        AuthService.init('https://localhost:44371')
        const token = AuthService.post('/token', {
          grant_type: 'password',
          username: username.value,
          password: password.value
        })
        console.log(token)
      }
    }
  }
}
</script>
