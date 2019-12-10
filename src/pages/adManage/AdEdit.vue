<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/admanage' }">广告管理</el-breadcrumb-item>
        <el-breadcrumb-item>修改</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <p>内容</p>
        <img
          src="http://img.taopic.com/uploads/allimg/130417/240451-13041FF15944.jpg"
          alt="#"
          style="width:300px;height:200px;"
        />
      </div>
      <div>
        <p>名称：</p>
        <el-input v-model="name" clearable></el-input>  
      </div>
      <div>
        <p>广告主：</p>
        <el-input v-model="personName" clearable></el-input>
      </div>
      <div>
        <p>投放区域：</p>
        <el-input v-model="area" clearable></el-input>
      </div>
      <div>
        <p>投放群体：</p>
        <el-input v-model="tag" clearable></el-input>
      </div>
      <p>
        <el-button type="success">保存</el-button>
      </p>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adContent: {},
      name: "",
      src: "",
      personName: "",
      area: "",
      tag: ""
    };
  },

  created() {
    this.adContent = this.$store.state.adContent;
    this.name = this.adContent.name;
    this.personName = this.adContent.personName;
    this.area = this.adContent.area;
    this.tag = this.adContent.tag;
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
</style>