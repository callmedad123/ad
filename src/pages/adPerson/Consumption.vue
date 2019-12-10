<template>
  <el-card>
    <el-row>
      <el-col :span="4">
        <div>
          <span class="title">1</span>消费记录
        </div>
      </el-col>
      <el-col :span="10">
        <div>
          <span>xx</span>广告主的消费记录
        </div>
      </el-col>
      <el-col :span="10">
        <div>
          <span>消费时间</span>
          <el-date-picker
            v-model="time"
            size="small"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
          <el-button type="primary" size="small">搜索</el-button>
          <el-button type="primary" size="small">导出</el-button>
        </div>
      </el-col>
    </el-row>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="num" label="序号" width="80"></el-table-column>
      <el-table-column prop="item" label="消费项"></el-table-column>
      <el-table-column prop="date" label="消费日期"></el-table-column>
      <el-table-column prop="price" label="消费金额"></el-table-column>
      <el-table-column prop="time" label="扣费时间"></el-table-column>
     
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
  },
  data() {
    return {
      currentPage: 1,
      time: "",
      tableData: [
        {
          num: 1,
          item:'这个是隔壁老王',
          price: 100.01,
          time: "2019-10-11 10:11:12",
          date: "2019-10-11"
        },
        {
          num: 2,
          item:'这个是隔壁老李',
          price: 200.01,
          time: "2019-10-12 15:12:19",
          date: "2019-10-12"
        }, {
          num: 3,
          item:'这个是隔壁老张',
          price:300.01,
          time: "2019-10-13 14:10:42",
          date: "2019-10-13"
        },
      ],
      
    };
  }
};
</script>

<style lang="less" scoped>
.el-card {
  .el-row {
    height: 40px;
    line-height: 40px;
    margin-bottom: 40px;
    .title {
      color: #ccc;
      background: #ccc;
      margin-right: 10px;
    }
  }
  .pages {
    margin-top: 40px;
    text-align: right;
  }
  .el-date-editor--datetimerange.el-input,
  .el-date-editor--datetimerange.el-input__inner {
    width: 42%;
    margin: 0 20px;
  }
}
</style>