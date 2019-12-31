<template>
  <div>
    <el-card class="box-card">
      <div class="title">
        <span>1</span>新增广告投放计划
      </div>
      <el-divider></el-divider>
      <el-form :model="adForm" :rules="rules" ref="adForm" label-width="110px">
        <el-form-item label="计划名称" prop="planName">
          <el-input v-model="adForm.planName"></el-input>
        </el-form-item>
        <el-form-item label="投放广告" prop="ad">
          <el-select v-model="adForm.ad" placeholder="请选择广告">
            <el-option label="广告1" value="ad1"></el-option>
            <el-option label="广告2" value="ad2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="广告主" prop="personName">
          <el-select v-model="adForm.personName" placeholder="请选择广告主">
            <el-option label="广告主1" value="adP1"></el-option>
            <el-option label="广告主2" value="adP2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="投放时间" prop="date">
         <el-date-picker
      v-model="adForm.date"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
        </el-form-item>
        <el-form-item label="投放区域" prop="area">
          <el-select v-model="adForm.area" placeholder="请选择投放区域" multiple>
            <el-option label="a小区" value="1"></el-option>
            <el-option label="b小区" value="2"></el-option>
            <el-option label="c小区" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="投放价格" prop="price">
          <el-input v-model.number="adForm.price"></el-input>元
          <span style="color:red;font-size:12px;">每成功投放一次的价格</span>
        </el-form-item>
        <el-form-item label="总投放上限" prop="totalLimit">
          <el-input v-model.number="adForm.totalLimit"></el-input>次
        </el-form-item>
        <el-form-item label="每日投放上限" prop="dayLimit">
          <el-input v-model.number="adForm.dayLimit"></el-input>次
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('adForm')">保存</el-button>
          <el-button @click="resetForm('adForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adForm: {
        planName: "",
        ad: "",
        personName: "",
        area:'',
        date: "",
        price: 0,
        totalLimit: 0,
        dayLimit: 0,
        
      },
      rules: {
        planName: [
          { required: true, message: "请输入计划名称", trigger: "blur" }
        ],
        ad: [{ required: true, message: "请选择广告", trigger: "change" }],
        personName: [{ required: true, message: "请选择广告主", trigger: "change" }],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期与时间",
            trigger: "change"
          }
        ],
       
        area: [{ required: true, message: "请选择投放区域", trigger: "change" }],
        price: [
          { required: true, message: "价格不能为空" },
          { type: "number", message: "价格必须为数字值" }
        ],
        totalLimit: [
          { required: true, message: "总上限不能为空" },
          { type: "number", message: "必须为数字值" }
        ],
        dayLimit: [
          { required: true, message: "日上限不能为空" },
          { type: "number", message: "必须为数字值" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
            message: "保存成功",
            type: "success"
          })
          } else {
            this.$message({
            message: "保存失败",
            type: "warning"
          })
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
.title {
  height: 40px;
  line-height: 40px;
  margin-bottom: 20px;
  span {
    color: #ccc;
    background: #ccc;
    margin-right: 10px;
  }
}
.el-form{
  width: 60%;
  .el-input{
    width:62%;
  }
}
</style>