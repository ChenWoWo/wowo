<template>
  <div class="page1">
    <!-- 使用导航栏组件 -->
    <NavBar title="页面1" />
    
    <!-- 使用卡片容器组件 -->
    <Card>
      <!-- 使用自定义输入框 -->
      <BaseInput v-model="searchText" placeholder="搜索内容" />
      
      <!-- 使用自定义按钮 -->
      <BaseButton @click="search">
        <template #icon>
          <SearchIcon /> <!-- 使用图标组件 -->
        </template>
        搜索
      </BaseButton>
    </Card>
  </div>
</template>

<script>
// 从公共组件目录导入
import { NavBar, Card, BaseInput, BaseButton, SearchIcon } from '@/components/common'

export default {
  components: {
    NavBar,
    Card,
    BaseInput,
    BaseButton,
    SearchIcon
  },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    search() {
      // 搜索逻辑...
    }
  }
}
</script>

<style>
.custom-card {
  margin: 20px;
  max-width: 800px;
}

.action-group {
  margin-top: 20px;
  display: flex;
  gap: 12px;
}
</style>