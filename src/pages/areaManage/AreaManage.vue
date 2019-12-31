<template>
  <el-card>
    <el-row>
      <el-col :span="18">
        <div class="title">
          <span>1</span>区域管理
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-input placeholder="请输入内容" v-model="input1" clearable></el-input>
          <el-button type="primary" size="small">搜索</el-button>
          <el-button type="primary" size="small">同步</el-button>
        </div>
      </el-col>
    </el-row>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="num" label="序号" width="80"></el-table-column>
      <el-table-column prop="deviceNum" label="机构代码"></el-table-column>
      
      <el-table-column prop="name" label="机构名称"></el-table-column>
      <el-table-column prop="counts" label="门禁机数量"></el-table-column>
      <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">门禁机操作</el-button>
            </template>
          </el-table-column>
      
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
    },
    handleClick(){
        this.$router.history.push('/home/machinemanage')
    }
   
   
  },
  data() {
    return {
      currentPage: 1,
      input1: "",

      tableData: [
        {
          num: 1,
          deviceNum:"001",
            name:'清波小区',
          counts:4,
        },
         {
          num: 2,
          deviceNum:"002",
            name:'清波小区',
          counts:9,
        },
        {
          num: 3,
          deviceNum:"003",
            name:'清波小区',
          counts:8,
        },
        
      ],
      
    };
  }
};
</script>

<style lang="less" scoped>
.el-card {
  .title {
    height: 40px;
    line-height: 40px;
    margin-bottom: 40px;
    span {
      color: #ccc;
      background: #ccc;
      margin-right: 10px;
    }
  }
  .el-input {
    width: 48%;
    margin: 0 10px;
  }
  .pages {
    margin-top: 40px;
    text-align: right;
  }
  
}
</style>