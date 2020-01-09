<template>
  <div>
    <el-card>
      <!-- 搜索栏 -->
      <el-row>
        <el-col :span="6">
        <div class="title">
          <span>基本信息</span>
        </div>
      </el-col>
      <el-col :span="18" style="text-align:right">
        <div class="rightTop">
          <el-input placeholder="请输入内容" v-model="search" clearable size="small"></el-input>
          <el-button class="btnBg" size="small">搜索</el-button>
          <el-button class="btnBg" size="small" @click="clickAdd">新增</el-button>
        </div>
      </el-col>
      </el-row>

      <!-- 人员信息表格 -->
      <el-table :data="tableData" border style="width: 100%;margin-bottom:15px;">
        <el-table-column prop="num" label="序号" width="80"></el-table-column>
        <el-table-column prop="code" label="广告主编码" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="80"></el-table-column>
        <el-table-column prop="tel" label="手机号"></el-table-column>
        <el-table-column prop="idCard" label="身份证号"></el-table-column>
        <el-table-column prop="balance" label="余额(元)"></el-table-column>
        <el-table-column fixed="right" label="操作" width="300">
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">资质信息</el-button>
            <el-button type="text" size="small" @click="clickPay(scope.row)">充值</el-button>
            <el-button type="text" size="small" @click="clickRecharge">充值记录</el-button>
            <el-button type="text" size="small" @click="clickConsumption">消费记录</el-button>
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

      

      <!-- 充值 -->
      <el-dialog title="余额充值" :visible.sync="dialogFormVisible" width="50%" class="pay">
        <el-form :model="form">
          <el-form-item label="余额" :label-width="formLabelWidth">
            <el-input v-model="form.balance" autocomplete="off"></el-input>
            <span> 元</span>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="clickSure">充值</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      search: "",
      tableData: [
        {
          num: 1,
          code: "3884194194",
          name: "王小虎",
          idCard: 298848184888888194,
          balance: 12.44,
          tel: 18414819493
        },
        {
          num: 2,
          code: "3884193194",
          name: "李小虎",
          idCard: 298848185888888194,
          balance: 12.54,
          tel: 18414819497
        },
        {
          num: 3,
          code: "3884194594",
          name: "赵小虎",
          idCard: 298848183888888194,
          balance: 12.64,
          tel: 18414819490
        }
      ],
      
      dialogFormVisible: false,
      
      form: {
        balance: 0
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    clickAdd() {
      this.$router.history.push("/adperson/newadd");
    },
    clickPay(val) {
      this.form = val;
      this.dialogFormVisible = true;
    },
    handleEdit(index, row) {
      this.$router.push({path:'/adperson/newadd', query: { id:index,tableData:row }})
      
    },
    clickRecharge() {
      this.$router.history.push("/adperson/recharge");
    },
    clickConsumption() {
      this.$router.history.push("/adperson/consumption");
    },
    
    clickSure() {
      this.$confirm("确定充值, 是否继续?", "提示", {
        confirmButtonText: "继续",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          if (this.form.balance) {
            this.$message({
              type: "success",
              message: "充值成功!"
            });
            this.dialogFormVisible = false;
          } else {
            this.$message({
              type: "warning",
              message: "充值失败!"
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消充值"
          });
        });
    }
  }
};
</script>

<style lang="less" scoped>
.el-row {
  .title {
    height: 40px;
    line-height: 40px;
    margin-bottom: 40px;
    span {
      border-bottom: 3px solid #1ab394;
    }
  }
  .el-input {
    width: 16%;
    margin: 0 10px;
  }
}
.pages {
  margin-top: 40px;
  text-align: center;
}
.pay {
  .el-input {
    width: 60%;
  }
}
</style>