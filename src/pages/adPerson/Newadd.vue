<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/personintro' }">基本信息</el-breadcrumb-item>
          <el-breadcrumb-item>新增</el-breadcrumb-item>
        </el-breadcrumb>
      <el-row style="margin-bottom:15px;">
  <el-col :span="12">
       <div>
        <p>人员编号：</p>
        <el-input v-model="personID" clearable></el-input>
      </div>
      <div>
        <p>营业单位名称：</p>
        <el-input v-model="workName" clearable></el-input>
      </div>
      <div>
        <p>人员姓名：</p>
        <el-input v-model="name" clearable></el-input>
      </div>
      <div>
        <p>身份证号码：</p>
        <el-input v-model="IDcard" clearable></el-input>
      </div>
  </el-col>
  <el-col :span="12"> 
        <span>投放端账号</span>
        <div>
          <p>账号：</p>
          <el-input v-model="acc" clearable></el-input>
       
     
          <p>密码：</p>
          <el-input v-model="pwd" clearable show-password></el-input>
       
        
          <p>确认密码：</p>
          <el-input v-model="doublepwd" clearable show-password></el-input>
        
      </div></el-col>
</el-row>
     
     
      <el-button type="success">增加</el-button>

    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personID: "",
      workName: "",
      name: "",
      IDcard: "",
      acc: "",
      pwd: "",
      doublepwd: ""
    };
  }
};
</script>

<style lang="less" scoped>
.el-breadcrumb{
  font-size: 16px;
}
.el-input{
    width: 70%;
}
</style>