<template>
  <el-card>
    <el-row>
      <el-col :span="2">
        <div class="title">
          <span>投放统计</span>
        </div>
      </el-col>
      <el-col :span="22" style="text-align:right">
        <div>
          <el-select v-model="value1" filterable placeholder="全部区域" size="small">
            <el-option
              v-for="item in option1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="value2" filterable placeholder="全部门禁" size="small">
            <el-option
              v-for="item in option2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="value3" filterable placeholder="全部广告主" size="small">
            <el-option
              v-for="item in option3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-button class="btnBg" size="small">上月</el-button>
          <el-button class="btnBg" size="small">本月</el-button>
          <el-button class="btnBg" size="small">自定义</el-button>
          <el-date-picker
            v-model="time"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="small"
          ></el-date-picker>
        </div>
      </el-col>
    </el-row>

    <el-table :data="tableData" border style="width: 100%" show-summary>
      <el-table-column prop="time" label="投放时间" width="320"></el-table-column>
      <el-table-column prop="counts" label="投放数量(次)" width="320"></el-table-column>
      <el-table-column prop="servePrice" label="广告服务费(元)" width="260"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">查看详情</el-button>
        </template>
      </el-table-column>
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
    handleClick(){
      this.$router.push({path:'/business/dayrecord'})
    }
  },
  data() {
    return {
      currentPage: 1,
      value1: "",
      value2: "",
      value3: "",
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
      option3: [
        {
          value: "选项1",
          label: "广告主1"
        },
        {
          value: "选项2",
          label: "广告主2"
        },
        {
          value: "选项3",
          label: "广告主3"
        }
      ],
      tableData: [
        {
          time: "2016-05-02",
          counts: 1235,
          servePrice:231.01
        },
        {
          time: "2016-05-03",
          counts: 1231,
          servePrice:232
        },
        {
          time: "2016-05-04",
          counts: 1232,
          servePrice:281.01
        },
        {
          time: "2016-05-05",
          counts: 1234,
          servePrice:331.01
        }
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
    margin-bottom: 40px;
    span {
      border-bottom: 3px solid #1ab394;
    }
  }
  .el-date-editor--datetimerange.el-input,
  .el-date-editor--datetimerange.el-input__inner {
    width: 30%;
    margin-left: 20px;
  }
  .el-select {
    width: 12%;
    margin: 0 10px;
  }
  .pages {
    margin-top: 40px;
    text-align: center;
  }
}
</style>