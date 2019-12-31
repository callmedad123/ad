<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/adaudit' }">广告审核</el-breadcrumb-item>
        <el-breadcrumb-item>查看详情</el-breadcrumb-item>
      </el-breadcrumb>

      <el-form ref="form" :model="viewContent" label-width="100px">
        <el-row>
          <!-- 左边内容 -->
          <el-col :span="12">
            <el-form-item label="内容">
              <img
                src="http://img.taopic.com/uploads/allimg/130417/240451-13041FF15944.jpg"
                alt="#"
                style="width:280px;height:180px;"
              />
            </el-form-item>
            <el-form-item label="广告名称">
              <el-input v-model="viewContent.adName" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="广告类型">
              <el-select v-model="viewContent.type" :disabled="true">
                <el-option label="平面广告" value="1"></el-option>
                <el-option label="门卫机广告" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="创建时间">
              <el-input v-model="viewContent.time" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <!-- 右边内容 -->
          <el-col :span="12">
            <el-form-item label="广告主ID">
              <el-input v-model="viewContent.personID" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="广告主名称">
              <el-input v-model="viewContent.personName" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="viewContent.tel" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="审核状态">
              <el-input v-model="viewContent.status" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="驳回原因">
              <el-input type="textarea" v-model="why" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewContent: {},
      why: "图片内容不符合规范"
    };
  },

  created() {
    this.viewContent = this.$store.state.adContent;
  }
};
</script>

<style lang="less" scoped>
.el-breadcrumb {
  font-size: 16px;
}
.el-form{
  margin-top: 40px;
  .el-input {
  width: 54%;
}
}

</style>