<template>
  <el-card>
    <el-row>
      <el-col :span="6">
        <div class="title">
          <el-breadcrumb separator-class=" ">
            <el-breadcrumb-item :to="{ path: '/area/areamanage' }"><i class="el-icon-back"></i></el-breadcrumb-item>
            <el-breadcrumb-item>
              <span>
                门禁机管理
              </span>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
      <el-col :span="18" style="text-align:right">
        <div>
          <el-input placeholder="请输入用户名" v-model="input1" clearable size="small"></el-input>

          <el-select v-model="value" clearable placeholder="状态" size="small">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-button class="btnBg" size="small" icon="el-icon-search">搜索</el-button>
          <el-button class="btnBg" size="small">同步</el-button>
        </div>
      </el-col>
    </el-row>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="num" label="序号" width="80"></el-table-column>
      <el-table-column prop="serialNum" label="设备序列号"></el-table-column>
      <el-table-column prop="affiliation" label="所属机构"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="counts" label="投放中广告数量"></el-table-column>
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
      input1: "",
      value:'',
      options: [
        {
          value: "0",
          label: "正常"
        },
        {
          value: "1",
          label: "离线"
        }
      ],
      tableData: [
        {
          num: 1,
          serialNum: "qaw123",
          name: "后门",
          affiliation: "清波小区",
          counts: 4,
          status: "正常"
        },
        {
          num: 2,
          serialNum: "qaw124",
          name: "后门",
          affiliation: "清波小区",
          counts: 2,
          status: "正常"
        },
        {
          num: 3,
          serialNum: "qaw125",
          name: "后门",
          affiliation: "清波小区",
          counts: 5,
          status: "离线"
        },
        {
          num: 4,
          serialNum: "qaw126",
          name: "后门",
          affiliation: "清波小区",
          counts: 7,
          status: "正常"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.el-card {
  .title {
    height: 30px;
    line-height: 40px;
    margin-bottom: 40px;
    padding-top: 10px;
    .el-breadcrumb {
      font-size: 16px;
      
    }
  }
 
  .el-select,.el-input {
    width: 18%;
    margin: 0 10px;
  }
  .pages {
    margin-top: 40px;
    text-align: center;
  }
}
</style>