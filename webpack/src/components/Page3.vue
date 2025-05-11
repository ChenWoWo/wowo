<template>
  <div class="page3">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <el-icon><setting /></el-icon>
          <span>系统设置</span>
        </div>
      </template>

      <el-form :model="formData" label-width="80px">
        <el-form-item label="主题颜色">
          <el-color-picker v-model="formData.color" />
        </el-form-item>
        <el-form-item label="通知方式">
          <el-checkbox-group v-model="formData.notifyTypes">
            <el-checkbox label="邮件" />
            <el-checkbox label="短信" />
          </el-checkbox-group>
        </el-form-item>
        <el-button type="primary" @click="saveSettings">保存设置</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { Setting } from '@element-plus/icons-vue'

export default {
  components: {
    Setting
  },
  data() {
    return {
      formData: {
        color: '#409EFF',
        notifyTypes: []
      }
    }
  },
  methods: {
    saveSettings() {
      this.$message.success('设置保存成功')
    }
  }
}
</script>

<style>
.box-card {
  max-width: 800px;
  margin: 20px auto;
}
.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>

<style scoped>
/* Replace CSS import with direct styles */
.page3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.page3 h1 {
  margin-bottom: 20px;
}
</style>