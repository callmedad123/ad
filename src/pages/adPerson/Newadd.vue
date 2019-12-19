<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/personintro' }">基本信息</el-breadcrumb-item>
        <el-breadcrumb-item>{{tag}}</el-breadcrumb-item>
      </el-breadcrumb>

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        :hide-required-asterisk="starShow"
      >
        <el-form-item label="人员编码" prop="code">
          <el-input v-model="ruleForm.code" :disabled="ban"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="tel">
          <el-input v-model="ruleForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="idCard">
          <el-input v-model="ruleForm.idCard"></el-input>
        </el-form-item>
        <el-form-item label="余额" prop="balance" v-show="show">
          <el-input v-model="ruleForm.balance" :disabled="ban"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      ban: false,
      tag: "新增",
      starShow:false,
      ruleForm: {
        code: "",
        name: "",
        tel: "",
        idCard: "",
        balance: 0
      },
      rules: {
        code: [
          { required: true, message: "请输入人员编码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        tel: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "请注意手机格式",
            trigger: "blur"
          }
        ],
        idCard: [
          { required: true, message: "请输入身份证号码", trigger: "blur" },
          {
            min: 18,
            max: 18,
            message: "请输入正确的身份证号",
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
            type: "success",
            message: "保存成功!"
          });
        } else {
          this.$message({
            type: "warning",
            message: "保存失败!"
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  //   getUrlKey(name) {//获取地址栏参数
	// 	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
	// }
  },
  created() {
    
    if (this.$route.query.id >=0) {
      this.ban=true;
      this.show=true;
      
      this.tag='编辑'
      this.ruleForm=this.$route.query.tableData;
      this.starShow=true;
      
    }
  }
};
</script>

<style lang="less" scoped>
.el-breadcrumb {
  font-size: 16px;
}
.el-input {
  width: 50%;
}
.el-form {
  margin-top: 40px;
}
</style>