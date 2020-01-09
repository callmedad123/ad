<template>
  <el-card>
    <el-row>
      <el-col :span="4">
        <div>
          <span class="title">充值记录</span>
        </div>
      </el-col>
      <el-col :span="10">
        <div>
          <span>xx</span>广告主的充值记录
        </div>
      </el-col>
      <el-col :span="10" style="text-align:right">
        <div>
          <span>充值时间</span>
          <el-date-picker
            v-model="time"
            size="small"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
          <el-button class="btnBg" size="small">搜索</el-button>
          <el-button class="btnBg" size="small" @click="clickAdd">导出</el-button>
        </div>
      </el-col>
    </el-row>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="num" label="序号" width="80"></el-table-column>
      <el-table-column prop="price" label="充值金额"></el-table-column>
      <el-table-column prop="time" label="充值时间"></el-table-column>
      <el-table-column prop="person" label="操作人"></el-table-column>
     
    </el-table>

    <!-- 分页 -->
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
          price: 100.01,
          time: "2019-10-11 12:11:12",
          person: "小明"
        },
        {
          num: 2,
          price: 100.51,
          time: "2019-10-11 10:11:12",
          person: "小王"
        },
        {
          num: 1,
          price: 130.01,
          time: "2019-10-11 12:16:12",
          person: "老王"
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
      border-bottom: 3px solid #1ab394;
    }
  }
  .pages {
    margin-top: 40px;
    text-align: center;
  }
  .el-date-editor--datetimerange.el-input,
  .el-date-editor--datetimerange.el-input__inner {
    width: 42%;
    margin: 0 20px;
  }
}
</style>