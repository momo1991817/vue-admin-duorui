<template>
  <div  class="app-container">
    <div class="dashboard-text" @click="goback">授权用户管理</div>
  </div>
</template>

<script>

export default {
  name: 'UserManage',
  computed: {
  },
  methods: {
    goback() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
