<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="6">
          <div class="title">
            <span>广告审核</span>
          </div>
        </el-col>

        <!-- 搜索头 -->
        <el-col :span="18" style="text-align:right">
          <div>
            <el-input placeholder="请输入内容" v-model="input1" clearable size='small'></el-input>
            <el-input placeholder="请输入内容" v-model="input2" clearable size='small'></el-input>
            <el-input placeholder="请输入内容" v-model="input3" clearable size="small"></el-input>
            <el-select v-model="value" filterable placeholder="全部状态" size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button  size="small" icon="el-icon-search" class="btnBg">搜索</el-button>
          </div>
        </el-col>
      </el-row>

      <!-- 审核表格 -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="num" label="序号" width="80"></el-table-column>
        <el-table-column prop="personID" label="广告主ID" width="180"></el-table-column>
        <el-table-column prop="adName" label="广告名称"></el-table-column>
        <el-table-column prop="type" label="广告类型" width="140"></el-table-column>
        <el-table-column prop="time" label="创建时间"></el-table-column>
        <el-table-column prop="personName" label="广告主姓名"></el-table-column>
        <el-table-column prop="tel" label="联系方式"></el-table-column>
        <el-table-column prop="status" label="审核状态" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="140">
          <template slot-scope="scope">
            <el-button type="text" size="small" v-show="scope.row.status=='待审核'">审核</el-button>
            <el-button
              type="text"
              size="small"
              v-show="scope.row.status=='已驳回'"
              @click="handleClick(scope.row)"
            >查看详情</el-button>
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
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      this.$store.commit("initadContent", row);
      this.$router.push({ path: "/ad/adwatch" });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    clickAdd() {
      this.$router.history.push("/ad/adcreate");
    }
  },

  data() {
    return {
      currentPage: 1,
      input1: "",
      input2: "",
      input3: "",
      options: [
        {
          value: 0,
          label: "全部状态"
        },
        {
          value: 1,
          label: "待审核"
        },
        {
          value: 2,
          label: "已驳回"
        }
      ],
      value: "", //状态
      tableData: [
        {
          num: 1,
          personID: "2016-05-02",
          adName: "xxxxx广告",
          type: "门卫机广告",
          time: "2018-10-01 12:30:03",
          personName: "小虎",
          tel: 14241251513,
          status: "待审核"
        },
        {
          num: 2,
          personID: "2016-05-03",
          adName: "axxxx广告",
          type: "门卫机广告",
          time: "2018-10-01 12:10:03",
          personName: "小王",
          tel: 14241251512,
          status: "已驳回"
        },
        {
          num: 3,
          personID: "2016-05-04",
          adName: "bxxxx广告",
          type: "平面广告",
          time: "2018-10-01 12:20:03",
          personName: "小小",
          tel: 14241251533,
          status: "已驳回"
        },
        {
          num: 4,
          personID: "2016-05-05",
          adName: "xxxxx广告",
          type: "门卫机广告",
          time: "2018-10-01 12:04:03",
          personName: "小绿",
          tel: 14241251013,
          status: "待审核"
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
  .el-input,
  .el-select {
    width: 16%;
    margin: 0 10px;
  }
  .pages {
    margin-top: 40px;
    text-align: center;
  }
  
  
}
</style>