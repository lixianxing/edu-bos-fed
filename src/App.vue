<template>
  <div id="app">
    <h1>App</h1>
    <el-input placeholder="" size="normal" clearable></el-input>
    <el-button type="primary" size="default">确认</el-button>
    <router-view />
  </div>
</template>

<style lang="scss">
h1 {
	font-size: $fs4;
}
</style>
