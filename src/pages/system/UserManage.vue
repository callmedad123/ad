<template>
  <el-card>
    <el-row>
      <el-col :span="18">
        <div class="title">
          <span>1</span>用户管理
        </div>
      </el-col>
      <el-col :span="6">
        <div class="rightTop">
          <el-input placeholder="请输入用户名" v-model="search" clearable></el-input>
          <el-button type="primary" size="small">搜索</el-button>
          <el-button type="primary" size="small" @click="clickAdd">新增</el-button>
        </div>
      </el-col>
    </el-row>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="num" label="序号" width="80"></el-table-column>
      <el-table-column prop="acc" label="用户名"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="tel" label="电话号"></el-table-column>
      <el-table-column prop="time" label="创建时间" width="200"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="clickChange">重置密码</el-button>
          <el-button type="text" size="small" @click="handleClick(scope.$index,scope.row)">编辑</el-button>
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


<!-- 授权 -->
    <el-dialog title="角色授权" :visible.sync="dialogFormVisible1" width="30%">
      <el-form :model="form1" class="roleForm">
        <el-form-item>
          <el-checkbox-group v-model="form1.type">
            <el-checkbox label="运营人员" name="type"></el-checkbox>
            <el-checkbox label="管理人员" name="type"></el-checkbox>
            <el-checkbox label="财务人员" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="clickSave1">确 定</el-button>
      </div>
    </el-dialog>

    
  </el-card>
</template>

<script>
export default {
  methods: {
    handleClick(index,val){
        this.$router.push({
          path:"/home/useradd",
          query:{
            id:index,
            tableData:val
          }
        })

    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    clickChange() {
      this.$router.push({path:"/home/pwdchange"});
    },
    clickAdd() {
      this.$router.history.push("/home/useradd");
    },
    clickAuthorization() {
      this.dialogFormVisible1 = true;
    },
    clickSave1() {
      this.dialogFormVisible1 = false;
    },
    clickDel(index){
      this.tableData.splice(index,1)
    }
  },
  data() {
    return {
      currentPage: 1,
      search: "",

      tableData: [
        {
          num: 1,
          acc: "zhazhahui",
          name: "渣渣灰",
          tel: 13424249294,
          time: "2016-05-02",
          region:'0'
        },
        {
          num: 2,
          acc: "xiaoming",
          name: "小明",
          tel: 13424249295,
          time: "2016-05-04",
          region:'1'
        },
        {
          num: 3,
          acc: "zhazhahui",
          name: "小红",
          tel: 13424249394,
          time: "2016-05-06",
          region:'0'
        }
      ],
      dialogFormVisible1: false,

      form1: {
        type: []
      },
     
      formLabelWidth: "100px"
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
  .rightTop{
    .el-input {
    width: 48%;
    margin: 0 10px;
  }
  }
  
  .pages {
    margin-top: 40px;
    text-align: right;
  }
  .el-dialog {
    .roleForm{
      width: 20%;
    }
  }
}
</style>