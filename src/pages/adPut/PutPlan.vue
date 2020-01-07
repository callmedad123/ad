<template>
  <el-card>
    <el-row>
      <el-col :span="4">
        <div class="title">
          <span>1</span>广告投放计划
        </div>
      </el-col>
      <el-col :span="20">
        <div>
          <el-input placeholder="请输入内容" v-model="input1" clearable size="small"></el-input>
          <el-input placeholder="请输入内容" v-model="input2" clearable size="small"></el-input>
          <el-select v-model="value" filterable placeholder="全部状态" size="small">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <span class="time">创建时间</span>
          <el-date-picker
            v-model="value2"
            type="datetimerange"
            :picker-options="pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right"
            size="small"
          ></el-date-picker>
          <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
        </div>
      </el-col>
    </el-row>
    <!-- 计划内容 -->

    <el-table
      :data="tableData"
      border
      style="width: 100%"
      @cell-click="viewDownStatus"
      :cell-style="cellStyle"
    >
      <el-table-column fixed prop="num" label="序号" width="50"></el-table-column>
      <el-table-column prop="code" label="计划编号" width="180"></el-table-column>
      <el-table-column prop="personName" label="广告主" width="80"></el-table-column>
      <el-table-column prop="areaNum" label="投放区域数量" width="120"></el-table-column>
      <el-table-column prop="status" label="状态" width="80"></el-table-column>
      <el-table-column prop="time" label="创建时间" width="180"></el-table-column>
      <el-table-column prop="machineNum" label="投放门禁机数量" width="120"></el-table-column>
      <el-table-column prop="counts" label="已投放次数" width="100"></el-table-column>
      <el-table-column prop="downStatus" label="下发状态"></el-table-column>
      <el-table-column fixed="right" label="操作" width="140">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="text"
            size="small"
            v-show="scope.row.status=='未开始'"
          >编辑</el-button>
          <el-button type="text" size="small" v-show="scope.row.status=='投放中'">结束</el-button>
          <el-button
            type="text"
            size="small"
            v-show="scope.row.status=='已结束'||scope.row.status=='投放中'"
            @click="clickRecord"
          >投放记录</el-button>
          <el-button
            type="text"
            size="small"
            v-show="scope.row.downStatus!='已完成' && scope.row.downStatus!='待下发'"
          >重新下发</el-button>
          <el-button type="text" size="small" v-show="scope.row.downStatus =='待下发'">下发</el-button>
          <el-button type="text" size="small" v-show="scope.row.status=='未开始'">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

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
    <!-- 广告下发记录 -->
    <el-dialog title="广告下发记录" :visible.sync="dialogTableVisible">
      <el-table :data="gridData" border>
        <el-table-column property="num" label="序号" width="150"></el-table-column>
        <el-table-column property="deviceName" label="设备名称" width="200"></el-table-column>
        <el-table-column property="status" label="下发状态"></el-table-column>
        <el-table-column property="date" label="时间"></el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">关闭</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      input1: "",
      input2: "",
      options: [
        {
          value: "0",
          label: "未开始"
        },
        {
          value: "1",
          label: "投放中"
        },
        {
          value: "2",
          label: "已结束"
        }
      ],
      value: "", //状态
      value2: "", //时间
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      tableData: [
        {
          num: 1,
          code: "2016-05-02",
          personName: "王小虎",
          areaNum: 3,
          status: "投放中",
          time: "2017-12-11",
          machineNum: 2,
          counts: 100,
          downStatus: "成功"
        },
        {
          num: 2,
          code: "2016-05-05",
          personName: "赵小虎",
          areaNum: 6,
          status: "已结束",
          time: "2017-12-11",
          machineNum: 23,
          counts: 102,
          downStatus: "已完成"
        },
        {
          num: 3,
          code: "2016-05-03",
          personName: "李小虎",
          areaNum: 5,
          status: "未开始",
          time: "2017-12-10",
          machineNum: 23,
          counts: 190,
          downStatus: "失败"
        },
        {
          num: 4,
          code: "2016-05-03",
          personName: "朱小虎",
          areaNum: 6,
          status: "未开始",
          time: "2017-12-10 14:11:20",
          machineNum: 23,
          counts: 190,
          downStatus: "待下发"
        }
      ],
      gridData: [
        {
          num: 1,
          status: "成功",
          date: "2016-05-02 13:11:10",
          deviceName: "东门进"
        },
        {
          num: 2,
          status: "成功",
          date: "2016-05-02 13:11:10",
          deviceName: "东门出"
        },
        {
          num: 3,
          status: "失败",
          date: "2016-05-02 14:11:10",
          deviceName: "本门进"
        }
      ],
      dialogTableVisible: false //弹出框
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    clickRecord() {
      this.$router.history.push("/home/putrecord");
    },
    viewDownStatus(row, column) {//单元格点击
      if (column.label =="下发状态") {
        this.dialogTableVisible = true;
      }
    },
    cellStyle({ columnIndex }) {//单元格样式修改
      if (columnIndex === 8) {
        // 指定列号
        return "color:red";
      } else {
        return "";
      }
    },
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
  .el-input,
  .el-select {
    width: 12%;
    margin-left: 10px;
  }
  .time {
    margin: 0 10px;
  }
  .el-button {
    margin-left: 10px;
  }
  .pages {
    margin-top: 40px;
    text-align: center;
  }
}
</style>