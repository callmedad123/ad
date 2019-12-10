<template>
  <div>
    <el-card>
      <h3>密码修改</h3>

      <el-form
        :model="changeForm"
        status-icon
        :rules="rules"
        ref="changeForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="原密码" prop="oldPwd">
          <el-input type="password" v-model="changeForm.oldPwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pwd">
          <el-input type="password" v-model="changeForm.pwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPwd">
          <el-input type="password" v-model="changeForm.checkPwd"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('changeForm')">提交</el-button>
          <el-button @click="resetForm('changeForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    var validatePwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.changeForm.checkPass !== "") {
          this.$refs.changeForm.validateField("checkPwd");
        }
        callback();
      }
    };
    var validatePwd2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.changeForm.pwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      changeForm: {
        oldPwd: "",
        pwd: "",
        checkPwd: ""
      },
      rules: {
        pwd: [
          { required: true, validator: validatePwd, trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur"
          },
          {
            pattern: /^(\w){6,16}$/,
            message: "只能输入字母、数字、下划线"
          }
        ],
        checkPwd: [
          { required: true, validator: validatePwd2, trigger: "blur" }
        ],
        oldPwd: [{ required: true, message: "原密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: "修改成功",
            type: "success"
          });
        } else {
          this.$message({
            message: "修改失败",
            type: "warning"
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.el-input {
  width: 30%;
}
</style>