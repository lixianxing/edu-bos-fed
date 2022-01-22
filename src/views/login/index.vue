<template>
  <div class="login">
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
      label-position="top"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="isLoginLoading" @click="onSubmit"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login } from '@/services/user.js'
export default {
  name: "Login",
  data () {
    return {
      form: {
        phone: "18770204944",
        password: "111111"
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { pattern: /^1\d{10}$/, message: "请输入正确的手机号", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 18, message: "密码长度为 6 到 18 位", trigger: "blur" }
        ]
      },
      isLoginLoading: false
    }
  },
  methods: {
    async onSubmit () {
      try {
        // 设置校验
        await this.$refs.form.validate()
        // 接口请求
        this.isLoginLoading = true
        const { data } = await login(this.login)
        this.isLoginLoading = false

        // 响应处理
        if (data.status === 1) {
          this.$router.push({
            name: 'home'
          })
          this.$message.success(data.message)
        } else {
          this.$message.error(data.message)
        }
      } catch (err) {
        this.$message({
          type: 'error',
          message: '没有通过校验'
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
	display: flex;

// 设置内部元素垂直水平居中
	justify-content: center;
	align-items: center;
	height: 100vh;

	.el-form {
		padding: 20px;
		border-radius: 10px;
		width: 300px;
		background-color: #fff;

		.el-button {
			width: 100%;
		}
	}
}
</style>
