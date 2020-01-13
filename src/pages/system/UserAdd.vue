<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class=" ">
        <el-breadcrumb-item :to="{ path: '/system/usermanage' }">
          <i class="el-icon-back"></i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{tag}}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-form
        :model="addForm"
        status-icon
        :rules="rules"
        ref="addForm"
        label-width="100px"
        :hide-required-asterisk="starShow"
      >
        <el-form-item label="账号" prop="acc">
          <el-input type="text" v-model="addForm.acc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd" v-if="show">
          <el-input type="password" v-model="addForm.pwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPwd" v-if="show">
          <el-input type="password" v-model="addForm.checkPwd"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input type="text" v-model="addForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="tel">
          <el-input type="text" v-model="addForm.tel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户类型" prop="region">
          <el-select v-model="addForm.region" placeholder="请选择用户类型" :disabled="ban">
            <el-option label="超级管理员" value="0"></el-option>
            <el-option label="管理员" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button class="btnBg" @click="submitForm('addForm')" v-if="show">提交</el-button>
          <el-button class="btnBg" @click="saveForm" v-if="showSave">保存</el-button>
          <el-button @click="resetForm('addForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  created() {
    if (this.$route.query.id >= 0) {
      this.starShow = true;
      this.show = false;
      this.ban = true;
      this.tag = "编辑";
      this.showSave = true;
      this.addForm = this.$route.query.tableData;
    }
  },
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
      starShow: false, //输入框前*显示与隐藏
      show: true, //输入框提交按钮显示与隐藏
      ban: false, //输入框禁用
      showSave: false, //保存按钮显示与隐藏
      tag: "用户新增",
      addForm: {
        pwd: "",
        checkPwd: "",
        acc: "",
        name: "",
        tel: "",
        region: ""
      },
      rules: {
        pwd: [
          { required: true, validator: validatePwd, trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ],
        checkPwd: [
          { required: true, validator: validatePwd2, trigger: "blur" }
        ],
        acc: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6 到 10 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择用户类型", trigger: "change" }
        ],
        name: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur"
          }
        ],
        tel: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur"
          },
          {
            min: 11,
            max: 11,
            message: "请注意手机号格式",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: "保存成功",
            type: "success"
          });
        } else {
          this.$message({
            message: "保存失败",
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
.el-breadcrumb {
  font-size: 16px;
  margin-bottom: 20px;
}
.el-input {
  width: 50%;
}
</style>