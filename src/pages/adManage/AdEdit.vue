<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class=" ">
        <el-breadcrumb-item :to="{ path: '/ad/admanage' }">
          <i class="el-icon-back"></i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>修改</el-breadcrumb-item>
      </el-breadcrumb>
<!-- 广告修改表单 -->
      <el-form ref="form" :model="adContent" label-width="80px">
        <el-form-item label="内容">
          <img
            src="http://img.taopic.com/uploads/allimg/130417/240451-13041FF15944.jpg"
            alt="#"
            style="width:300px;height:200px;"
          />
        </el-form-item>
        <el-form-item label="广告主ID">
          <el-input v-model="adContent.personID"></el-input>
        </el-form-item>
        <el-form-item label="广告名称">
          <el-input v-model="adContent.adName"></el-input>
        </el-form-item>
        <el-form-item label="广告类型">
          <el-select v-model="adContent.type">
            <el-option label="平面广告" value="1"></el-option>
            <el-option label="门卫机广告" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-input v-model="adContent.time"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adContent: {
        personID: 0,
        adName: "",
        type: "",
        time: ""
      }
    };
  },

  created() {
    this.adContent = this.$store.state.adContent;
  }
};
</script>

<style lang="less" scoped>
.el-breadcrumb {
  font-size: 16px;
}
.el-form {
  margin-top: 40px;
  .el-input {
    width: 30%;
  }
}
</style>