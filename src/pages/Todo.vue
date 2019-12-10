<template>
  <el-card>
    <h2>欢迎登录xxxxxxx</h2>
    <el-tabs type="border-card">
      <el-tab-pane label="代办事项">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="num" label="序号" width="100"></el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">处理</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="eventNum" label="事件编号"></el-table-column>
          <el-table-column prop="type" label="待办类型"></el-table-column>
          <el-table-column prop="date" label="提交时间"></el-table-column>
        </el-table>
        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="4"
      layout="total, prev, pager, next"
      :total="12">
    </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="已提交事项">已提交事项</el-tab-pane>
      <el-tab-pane label="已办事项">已办事项</el-tab-pane>
    </el-tabs>
    <el-button icon="el-icon-refresh-right" type="text" class="refresh"></el-button>
  </el-card>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  data() {
    return {
      currentPage:1,
      tableData: [
        {
          date: "2016-05-02",
          num: 1,
          type: "xx申请",
          eventNum: 200331
        },
        {
          date: "2016-05-04",
          num: 2,
          type: "xx申请",
          eventNum: 200332
        },
        {
          date: "2016-05-01",
          num: 3,
          type: "xx申请",
          eventNum: 200333
        },
        {
          date: "2016-05-03",
          num: 4,
          type: "xx申请",
          eventNum: 200334
        }
      ]
    };
  }
};
</script>


<style lang="less" scoped>
.el-card {
  position: relative;
  .refresh {
    font-size: 16px;
    position: absolute;
    top: 94px;
    right: 30px;
  }
  
}
</style>