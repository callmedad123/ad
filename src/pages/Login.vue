<template>
  <div class="box">
    <el-card>
      <div class="title">
        <span>广告运营管理系统</span>
        <el-divider>
        <i class="el-icon-s-platform"></i>
      </el-divider>
      </div>

      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"   
        label-width="0px"
        class="ruleForm"
      >
        <el-form-item  prop="acc" >
          <el-input type="text" v-model="loginForm.acc" autocomplete="off" prefix-icon="el-icon-user-solid" ></el-input>
        </el-form-item>
        <el-form-item label="" prop="pwd">
          <el-input type="password" v-model="loginForm.pwd" autocomplete="off" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
       
        <el-form-item>
          <el-button type="success" @click="submitForm('loginForm')" >登录</el-button>
        </el-form-item>
      </el-form>
      
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        acc:'',
        pwd: "",
      },
      rules: {
        pwd: [{required: true, message:'密码不能为空', trigger: "blur" },
        { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
        acc: [{required: true,message:'账号不能为空', trigger: "blur" },
          { min: 6,message: '至少6位字符', trigger: 'blur' }
        ],
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
          this.$router.push({path:"/home/todo",});
        } else {
          this.$message({
            message: "登录失败，请检查账号和密码",
            type: "warning"
          });
          return false;
        }
      });
    },
   
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  background: rgba(88, 92, 99, 0.8);
}
.el-card {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .title{
    text-align: center;
    span{
      font-size: 20px;
    }
    i {
    font-size: 20px;
  }
  }
  

  .el-button {
    width: 100%;
  }
}
</style>