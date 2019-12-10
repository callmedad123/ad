<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home/usermanage' }">用户管理</el-breadcrumb-item>
  <el-breadcrumb-item>用户新增</el-breadcrumb-item>
  
</el-breadcrumb>
      <el-form
        :model="addForm"
        status-icon
        :rules="rules"
        ref="addForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="acc">
          <el-input type="text" v-model="addForm.acc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input type="password" v-model="addForm.pwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPwd">
          <el-input type="password" v-model="addForm.checkPwd"></el-input>
        </el-form-item>
        <el-form-item label="用户类型" prop="region">
    <el-select v-model="addForm.region" placeholder="请选择用户类型">
      <el-option label="超级管理员" value="0"></el-option>
      <el-option label="管理员" value="1"></el-option>
    </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('addForm')">提交</el-button>
          <el-button @click="resetForm('addForm')">重置</el-button>
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
        if (this.addForm.checkPass !== "") {
          this.$refs.addForm.validateField("checkPwd");
        }
        callback();
      }
    };
    var validatePwd2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.addForm.pwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      addForm: {
        pwd: "",
        checkPwd: "",
        acc: "",
        region:'',
      },
      rules: {
        pwd: [{ required: true,validator: validatePwd, trigger: "blur" },
              { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
        checkPwd: [{required: true, validator: validatePwd2, trigger: "blur" }],
        acc: [{required: true, message:'账号不能为空', trigger: "blur" },
               { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
        region: [
            { required: true, message: '请选择用户类型', trigger: 'change' }
          ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: "添加成功",
            type: "success"
          });
        } else {
          this.$message({
            message: "添加失败",
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
.el-breadcrumb{
  font-size: 16px;
  margin-bottom: 20px;
}
.el-input {
  width: 50%;
}
</style>