<template>
  <div id="app">
    <h1>App</h1>
    <el-input placeholder="" size="normal" clearable></el-input>
   <el-button type="primary" plain>主要按钮</el-button>
  <el-button type="success" plain>成功按钮</el-button>
  <el-button type="info" plain>信息按钮</el-button>
  <el-button type="warning" plain>警告按钮</el-button>
  <el-button type="danger" plain>危险按钮</el-button>
    <router-view />
  </div>
</template>

<style lang="scss">
h1 {
	font-size: $fs4;
}
</style>
