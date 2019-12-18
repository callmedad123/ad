<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home/rolemanage' }">角色管理</el-breadcrumb-item>
  <el-breadcrumb-item>角色新增</el-breadcrumb-item>
  
</el-breadcrumb>
      <el-form
        :model="addForm"
        status-icon
        :rules="rules"
        ref="addForm"
        label-width="100px"
      >
        <el-form-item label="角色名" prop="roleName">
          <el-input type="text" v-model="addForm.roleName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="mark">
          <el-input type="text" v-model="addForm.mark" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色功能" prop="region">
    <el-select v-model="addForm.region" placeholder="功能选择">
      <el-option label="功能1" value="0"></el-option>
      <el-option label="功能2" value="1"></el-option>
      <el-option label="功能3" value="1"></el-option>
      <el-option label="功能4" value="1"></el-option>
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
    return {
      addForm: {
        roleName: "",
        mark: "",
        region:'',
      },
      rules: {
        roleName: [{ required: true,message:'不能为空', trigger: "blur" },
              { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
          ],
        mark: [{required: true,message:'不能为空' , trigger: "blur" }],
        region: [
            { required: true, message: '请选择角色功能', trigger: 'change' }
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