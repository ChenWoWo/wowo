<template>
  <div class="overview-page">
    <NavBar title="系统概览" />
    <Card>
      <BaseButton @click="refreshData">刷新数据</BaseButton>
      <BaseInput v-model="searchKey" placeholder="搜索关键词" />
    </Card>
  </div>
</template>

<script>
import { NavBar, Card, BaseButton, BaseInput } from '@/components/common'

export default {
  components: {
    NavBar,
    Card,
    BaseButton,
    BaseInput
  },
  data() {
    return {
      searchKey: ''
    }
  }
}
</script>

<style scoped>
@import './OverviewPage.css';
</style>