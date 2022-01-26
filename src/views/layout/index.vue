<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <!-- 侧边栏组件 -->
        <AppAside />
      </el-aside>
      <el-container>
        <el-header>
          <!-- 头部组件 -->
          <AppHeader />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import AppAside from './components/AppAside.vue'
import AppHeader from './components/AppHeader.vue'
export default {
  name: "Layout",
  components: {
    AppAside,
    AppHeader
  }
}
</script>
<style lang="scss" scoped>
.el-container {
	min-width: 400px;
	height: 100vh;
}
.el-aside {
	background-color: #d3dce6;
}
.el-header {
	background-color: #fff;
}
.el-main {
	background-color: #e9eef3;
}
</style>
