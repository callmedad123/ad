<template>
  <div>
    <el-card>
         <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/admanage' }">广告管理</el-breadcrumb-item>
        <el-breadcrumb-item>操作记录</el-breadcrumb-item>
      </el-breadcrumb>

      <el-table :data="tableData"  border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="名称" width="180"></el-table-column>
        <el-table-column prop="people" label="操作人" width="180"></el-table-column>
        <el-table-column prop="operation" label="操作记录"></el-table-column>
      </el-table>


      <div class="pages">
        <el-pagination
        background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="4"
      layout="prev, pager, next, jumper"
      :total="10">
    </el-pagination>
    </div>
    </el-card>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData:[
          {
              date:"2018-10-1",
              name:"xxx广告",
              people:'小明',
              operation:'提交审核'
          },
          {
              date:"2018-10-2",
              name:"xxx广告",
              people:'小红',
              operation:'审核驳回'
          },
          {
              date:"2018-10-2",
              name:"xxx广告",
              people:'小绿',
              operation:'进行编辑'
          },
           {
              date:"2018-10-3",
              name:"xxx广告",
              people:'大明',
              operation:'提交审核'
          },
      ]
    };
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
  },

 
};
</script>

<style lang="less" scoped>
.el-breadcrumb {
  font-size: 16px;
  margin-bottom: 40px;
}
.el-input {
  width: 50%;
}
.pages{
      margin-top:40px;
      text-align: right;
  }
</style>