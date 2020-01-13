<template>
  <div class="box">
    <div class="content">
      <div class="title">
        <img src="@/assets/imgs/logo.png" alt="#"  class="logo"/>
        <img src="@/assets/imgs/title.png" alt="#" class="name">
      </div>

      <div class="text">
        <p>管理账户登录</p>
        <span>请输入您的管理账号和管理密码</span>
      </div>
  <!-- 登录表单 -->
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="0px"
        class="ruleForm"
      >
        <el-form-item prop="acc">
          <el-input
            type="text"
            v-model="loginForm.acc"
            autocomplete="off"
            prefix-icon="el-icon-user-solid"
            class="login"
          ></el-input>
        </el-form-item>
        <el-form-item label prop="pwd">
          <el-input
            type="password"
            v-model="loginForm.pwd"
            autocomplete="off"
            prefix-icon="el-icon-lock"
            class="login"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
<!-- 版权 -->
      <p class="copy">
        Copyright &copy; 2020广告运营管理端 V1.0.0
      </p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.enterLogin();
  },
  data() {
    return {
      checked:true,
      loginForm: {
        //登录表单
        acc: "",
        pwd: ""
      },
      rules: {
        //验证规则
        pwd: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ],
        acc: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 6, message: "至少6位字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: "登录成功",
            type: "success"
          });
          this.$router.push({ path: "/home/todo" });
        } else {
          this.$message({
            message: "登录失败，请检查账号和密码",
            type: "warning"
          });
          return false;
        }
      });
    },
    enterLogin() {
      //回车登录
      let _this = this;
      document.onkeydown = function(e) {
        e = window.event || e;
        if (e.code == "Enter" || e.code == "Num Enter") {
          _this.submitForm("loginForm");
        }
      };
    }
  }
};
</script>
<style lang="less">
@rememberColor:#1ab394;
.login input.el-input__inner {
  width: 90%;
  border-radius: 20px;
  background: #e9f8f5;
}
.remember .el-checkbox__input.is-checked+.el-checkbox__label {
    color: @rememberColor;
}
.remember .el-checkbox__inner::after{
      border: 1px solid @rememberColor;
    border-left: 0;
    border-top: 0;
}
.remember .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #fff;
    border-color: @rememberColor;
}
.remember .el-checkbox__input.is-focus .el-checkbox__inner,.remember .el-checkbox__inner:hover{
  border-color: @rememberColor;
}
</style>

<style lang="less" scoped>
@color:#aeaeae;
@fz:12px;
.box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../assets/imgs/bg-2.png"),
    url("../assets/imgs/bg-3.png"), url("../assets/imgs/bg-1.png");
  background-size: 100%, 40%, 50% 100%;
  background-position: bottom, 75% 50%, right top;
  background-repeat: no-repeat;

  .content {
    width: 30%;
    padding: 8%;
    .title {
      .logo {
        width: 60px;
      }
      .name{
        height: 30px;
        margin-left: 10px;
      }
    }
    .text {
      margin: 40px 0;
      p {
        font-size: 40px;
        margin: 4px 0;
        
      }
      span {
        font-size: @fz;
        color: @color;
      }
    }

    .el-button {
      width: 90%;
      border-radius: 20px;
      background-color: #1ab394;
      color: #fff;
    }
    .copy{
      margin-top: 60px;
      font-size: @fz;
      color: @color;
    }
    

  }
}
</style>