<template>
  <el-card>
    <el-row class="title">
      <el-col :span="6">
        <el-breadcrumb separator-class=" ">
          <el-breadcrumb-item :to="{ path: '/adput/putplan' }"><i class="el-icon-back"></i></el-breadcrumb-item>
          <el-breadcrumb-item>投放记录</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="12">
        <div>
          <span class="adname">xxx广告</span>的投放记录 已投放：
          <span class="counts">2444</span>条
        </div>
      </el-col>
    </el-row>

    <div class="search">
      <el-select v-model="area" filterable placeholder="全部区域" size="small">
        <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-select v-model="machine" filterable placeholder="全部门禁" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <span class="time">投放时间</span>
      <el-date-picker
        v-model="time"
        type="datetimerange"
        :picker-options="pickerOptions"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right"
        size="small"
        style="width:30%"
      ></el-date-picker>
      <el-button class="btnBg" icon="el-icon-search" size="small">搜索</el-button>
      <el-button class="btnBg" size="small">导出</el-button>
    </div>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="num" label="序号" width="100"></el-table-column>
      <el-table-column prop="area" label="投放区域" width="180"></el-table-column>
      <el-table-column prop="machineName" label="门禁名称"></el-table-column>
      <el-table-column prop="adName" label="广告名称" width="180"></el-table-column>
      <el-table-column prop="username" label="被投放人姓名" width="180"></el-table-column>
      <el-table-column prop="date" label="投放时间" width="200"></el-table-column>
    </el-table>

    <div class="pages">
        <el-pagination
        background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="5"
      layout="prev, pager, next, jumper"
      :total="50">
    </el-pagination>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      currentPage:1,
      area: "",
      machine: "",
      time: "",
      option: [
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
      options: [
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
          num: 1,
          username: "王小虎",
          area: 3,
          date: "2017-12-11",
          machineName: 2,
          adName:'哇哈哈'
        },
       {
          num: 2,
          username: "黑小虎",
          area: 3,
          date: "2017-12-14",
          machineName: 2,
          adName:'哇哈哈'
        },
        {
          num: 3,
          username: "李小虎",
          area: 3,
          date: "2017-12-15",
          machineName: 2,
          adName:'哇哈哈'
        },
      ],
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
.el-card {
  .title {
    .counts {
      font-size: 16px;
      color: red;
      font-weight: bold;
    }
  }
  .search {
    text-align: right;
    margin: 20px 0 20px 0;
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
  }
  .pages{
      margin-top:40px;
      text-align: center;
  }
}
</style>