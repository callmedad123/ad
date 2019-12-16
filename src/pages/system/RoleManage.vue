<template>
  <el-card>
    <el-row>
      <el-col :span="18">
        <div class="title">
          <span>1</span>角色管理
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-input placeholder="请输入用户名" v-model="input1" clearable></el-input>
          <el-button type="primary" size="small">搜索</el-button>
          <el-button type="primary" size="small" @click="clickAdd">新增</el-button>
        </div>
      </el-col>
    </el-row>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="num" label="序号" width="80"></el-table-column>
      <el-table-column prop="roleName" label="角色名"></el-table-column>
      <el-table-column prop="mark" label="备注"></el-table-column>
      <el-table-column prop="sort" label="排序"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="clickAuthorization(scope.row)">授权</el-button>
          <el-button type="text" size="small" @click="clickDel(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
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

    <el-dialog title="功能授权" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="form">
        <el-form-item>
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="功能1" name="type"></el-checkbox>
            <el-checkbox label="功能2" name="type"></el-checkbox>
            <el-checkbox label="功能3" name="type"></el-checkbox>
            <el-checkbox label="功能4" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="clickSave">确 定</el-button>
      </div>
    </el-dialog>
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
    clickChange() {
      this.$router.history.push("/home/pwdchange");
    },
    clickAuthorization() {
      this.dialogFormVisible = true;
    },
    clickSave() {
      this.dialogFormVisible = false;
    },
    clickDel(index){
      this.tableData.splice(index,1)
    },
    clickAdd(){
      this.$router.push({path:'/home/roleadd'})
    }
  },
  data() {
    return {
      currentPage: 1,
      input1: "",

      tableData: [
        {
          num: 1,
          roleName: "运营人员",
          mark: "渣渣灰",
          sort: 1,
        },
        {
          num: 2,
          roleName: "管理人员",
          mark: "古天乐",
          sort: 2,
        },
        {
          num: 3,
          roleName: "财务人员",
          mark: "999",
          sort: 3,
        },
        
      ],
      dialogFormVisible: false,
      form: {
        type: []
      },
      formLabelWidth: "120px"
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
      color: #ccc;
      background: #ccc;
      margin-right: 10px;
    }
  }
  .el-input {
    width: 50%;
    margin: 0 10px;
  }
  .pages {
    margin-top: 40px;
    text-align: right;
  }
  .el-dialog {
    .el-form {
      width: 20%;
    }
  }
}
</style>