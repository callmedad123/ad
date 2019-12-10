<template>
  <div>
    <el-card>
      <h3>管理</h3>
      <!-- 查询 -->
      <div style="margin-bottom: 15px;">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="编号" value="1"></el-option>
            <el-option label="单位" value="2"></el-option>
            <el-option label="姓名" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <!-- 查询人 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="编号" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 编辑 -->
      <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="人员编号" :label-width="formLabelWidth">
            <el-input v-model="form.personID" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="单位名称" :label-width="formLabelWidth">
            <el-input v-model="form.workName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" :label-width="formLabelWidth">
            <el-input v-model="form.IDcard" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="投放端账号" :label-width="formLabelWidth">
            <el-input v-model="form.acc" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.pwd" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="clickOpen">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      select: "",
      tableData: [
        {
          date: "20160502",
          name: "赵小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "20160504",
          name: "钱小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "20160501",
          name: "孙小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "20160503",
          name: "李小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      dialogFormVisible: false,
      form: {
        name: "",
        personID: "",
        workName: "",
        IDcard: "",
        acc: "",
        pwd: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
    },
    clickOpen() {
      this.$confirm("确定修改, 是否继续?", "提示", {
        confirmButtonText: "保存",
        cancelButtonText: "放弃修改",
        type: "warning"
      })
        .then(() => {
          if (this.form.name == "dd") {
            this.$message({
              type: "success",
              message: "修改成功!"
            });
            this.dialogFormVisible = false;
          } else {
            this.$message({
              type: "warning",
              message: "修改失败!"
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消修改"
          });
        });
    }
  }
};
</script>

<style lang="less" scoped>
.el-select {
  width: 130px;
}
.el-input {
  width: 60%;
}
</style>