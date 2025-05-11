<template>
  <div class="login-page">
    <NavBar title="用户登录" />
    <form @submit.prevent="handleLogin">
      <BaseInput placeholder="用户名" v-model="username" />
      <BaseInput type="password" placeholder="密码" v-model="password" />
      <BaseButton type="submit" size="large">登录</BaseButton>
    </form>
  </div>
</template>

<script>
console.log("ss")
import BaseButton from '@/components/common/Button.vue'
import BaseInput from '@/components/common/Input.vue'
import NavBar from '@/components/common/NavBar.vue'

export default {
  components: {
    BaseButton,
    BaseInput,
    NavBar
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      this.$router.push('/main')
    }
  }
}
</script>

<style scoped>
@import './LoginPage.css';
</style>