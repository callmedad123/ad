<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/adaudit' }">广告审核</el-breadcrumb-item>
        <el-breadcrumb-item>查看详情</el-breadcrumb-item>
      </el-breadcrumb>

      <el-row>
  <el-col :span="12">
       <div>
        <p>广告图片：</p>
        <img
          src="http://img.taopic.com/uploads/allimg/130417/240451-13041FF15944.jpg"
          alt="#"
          style="width:300px;height:200px;"
        />
      </div>
      <div>
        <p>名称：</p>
        <el-input v-model="adContent.adName" :disabled="true"></el-input>  
      </div>
      <div>
        <p>广告主：</p>
        <el-input v-model="adContent.personName" :disabled="true"></el-input>
      </div>
      <div>
        <p>投放区域：</p>
        <el-input v-model="area" :disabled="true"></el-input>
      </div>
      <div>
        <p>投放群体：</p>
        <el-input v-model="tag" :disabled="true"></el-input>
      </div>
          
      
      
      </el-col>
  <el-col :span="12">

       <div>
        <p>广告编码：</p>
        <el-input v-model="adContent.code" :disabled="true"></el-input>  
      </div>
      <div>
        <p>广告类型：</p>
        <el-input v-model="adContent.type" :disabled="true"></el-input>  
      </div>
      <div>
        <p>创建时间：</p>
        <el-input v-model="adContent.time" :disabled="true"></el-input>
      </div>
      <div>
        <p>审核状态：</p>
        <el-input v-model="adContent.status" :disabled="true"></el-input>
      </div>
      <div>
        <p>驳回原因：</p>
        <el-input v-model="why" :disabled="true"></el-input>
      </div>
  </el-col>
</el-row>
      
     
      
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adContent: {},
      area:'xx小区',
      tag:'xx人群',
      why:'图片内容不符合规范'
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
.el-input {
  width: 50%;
}
</style>