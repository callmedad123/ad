<template>
  <el-card>
    <el-row>
      <el-col :span="4">
        <div class="title">
          <span>1</span>投放记录
        </div>
      </el-col>
      <el-col :span="20">
        <div>
          <el-select v-model="value1" filterable placeholder="全部区域">
            <el-option
              v-for="item in option1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="value2" filterable placeholder="全部门禁">
            <el-option
              v-for="item in option2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-input placeholder="输入广告名称" v-model="input1" clearable></el-input>
          <el-input placeholder="输入广告编码" v-model="input2" clearable></el-input>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
  <el-col :span="12" :offset="6">
            <span>投放时间</span>
          <el-date-picker
            v-model="time"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="small"
          ></el-date-picker>
          <el-button type="primary" size="small">搜索</el-button>
          <el-button type="primary" size="small">导出</el-button>
          
  </el-col>
</el-row>
    

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="num" label="序号" width="80"></el-table-column>
      <el-table-column prop="area" label="投放区域" ></el-table-column>
      <el-table-column prop="machineName" label="门禁名称" ></el-table-column>
      <el-table-column prop="planName" label="广告计划名称" ></el-table-column>
      <el-table-column prop="adName" label="投放广告名称" ></el-table-column>
      <el-table-column prop="username" label="被投放人姓名" ></el-table-column>
       <el-table-column prop="servePrice" label="广告服务费" ></el-table-column>
      <el-table-column prop="time" label="投放时间" width="180" ></el-table-column>
      
    </el-table>

    <!-- 翻页 -->
    <div class="pages">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="5"
        layout="prev, pager, next, jumper"
        :total="50"
      ></el-pagination>
    </div>
    

  </el-card>
</template>

<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      currentPage: 1,
      value1: "",
      value2: "",
      input1:'',
      input2:'',
      time: "",
      option1: [
        {
          value: "选项1",
          label: "区域1"
        },
        {
          value: "选项2",
          label: "区域2"
        },
        {
          value: "选项3",
          label: "区域3"
        }
      ],
      option2: [
        {
          value: "选项1",
          label: "门禁1"
        },
        {
          value: "选项2",
          label: "门禁2"
        },
        {
          value: "选项3",
          label: "门禁3"
        }
      ],
      tableData: [
        {  
            num:1,
            area:'东门',
            machineName:'门禁1',
            planName:'月饼投放计划',
            adName:'大闸蟹',
            username:'老王',
            servePrice:0.01,
          time: "2016-05-02",
        },
        {  
            num:2,
            area:'东门',
            machineName:'门禁1',
            planName:'月饼投放计划',
            adName:'大闸蟹',
            username:'老王',
             servePrice:0.02,
          time: "2016-05-02",
        },
        {  
            num:3,
            area:'东门',
            machineName:'门禁1',
            planName:'月饼投放计划',
            adName:'大闸蟹',
            username:'老王',
             servePrice:0.01,
          time: "2016-05-02",
        },
        {  
            num:4,
            area:'东门',
            machineName:'门禁1',
            planName:'月饼投放计划',
            adName:'大闸蟹',
            username:'老王',
             servePrice:0.01,
          time: "2016-05-02",
        },
        
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.el-card {
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
  .el-date-editor--datetimerange.el-input,
  .el-date-editor--datetimerange.el-input__inner {
    width: 40%;
    margin:0 20px;
  }
  .el-input,
  .el-select {
    width: 15%;
    margin: 0 10px;
  }
  .el-table{
      margin: 20px 0;
  }
  .pages {
    text-align: right;
  }
}
</style>