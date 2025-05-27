<script setup>

</script>

<template>
  <el-container style="height: 100vh">
    <el-header>
      <el-menu mode="horizontal" default-active="1" class="el-menu-demo">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">服务</el-menu-item>
        <el-menu-item index="3">联系我们</el-menu-item>
      </el-menu>
    </el-header>

    <el-main>
      <div class="hero">
        <h1>欢迎访问我们的平台</h1>
        <el-button type="primary">立即注册</el-button>
      </div>
    </el-main>

    <el-footer>© 2025 AKC Reunite</el-footer>
  </el-container>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 80px 20px;
  background-color: #f5f7fa;
}
</style>
