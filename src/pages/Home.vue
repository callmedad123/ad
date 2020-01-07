<template>
  <div class="box">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <el-row>
          <el-col :span="1">
            <div class="logo">
              <img src="../assets/imgs/logo1.png" alt="#" />
            </div>
          </el-col>
          <el-col :span="3">
            <div style="font-weight:bold;font-size:18px;">广告运营管理端</div>
          </el-col>
          <el-col :span="2"  class="text">
           <span>您所在的位置 <i class="el-icon-s-home"></i>：</span> 
           
          </el-col>
          <el-col :span="15">
            <Breadcrumb/>
          </el-col>
          <el-col :span="3">
            <div class="user">
              <el-dropdown trigger="click" class="username" @command="clickPwd">
                <span class="el-dropdown-link">
                  <i class="el-icon-s-custom"></i>
                  Username
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus" command="a">修改密码</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-error" command="b">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
      </el-header>

      <el-container>
        <!-- 左边导航 -->
        <el-aside width="220px">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            unique-opened
            router
          >
            <el-submenu v-for="(item,key) in menulist" :index="item.path" :key="key">
              <template slot="title">
                <i :class="item.icon" style="color:#fff"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item-group
                v-for="(items,keys) in item.children"
                :index="items.path"
                :key="keys"
              >
                <!-- 一级菜单 -->
                <el-menu-item v-if="items.child==null" :index="items.path">{{items.name}}</el-menu-item>
                <!-- 二级菜单 -->
                <el-submenu :index="items.path" v-if="items.child">
                  <template slot="title">{{items.name}}</template>
                  <el-menu-item :index="i.path" v-for="(i,k) in items.child" :key="k">{{i.name}}</el-menu-item>
                </el-submenu>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 右边内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import tree from "../json/tree.json";
import Breadcrumb from '@/components/Breadcrumb'
export default {
  components:{
  Breadcrumb,
  },
  data() {
    return {
      menulist: []
    };
  },
  created() {
    this.menulist = tree;
  },
  methods: {
    clickPwd(command) {
      if (command == "a") {
        this.$router.history.push("/home/pwdchange");
      } else {
        this.$router.push({ path: "/" });
        this.$message({
          message: "已注销登录",
          type: "warning"
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  height: 100%;
  .el-header {
    background-color: #fff;
    padding: 0;
    color: #fff;
    line-height: 60px;
    .logo {
      width: 220px;
      background: #1ab394;
      img{
        margin: 18px 0 0 10px;
        width: 40px;
        height: 20px;
      }
    }
    .text{
      color: #9a9a9a;
      font-size: 14px;
    }
    .user {
      font-size: 14px;
      .username {
        margin-left: 20px;
        .el-dropdown-link {
          color: #fff;
        }
      }
    }
  }
  .home {
    height: 30px;
    line-height: 30px;
  }
}
.box .el-header .user .username .el-dropdown-link{
  color: #9a9a9a;
}

.el-container {
  height: 100%;
}
.el-aside {
  height: 100%;
  background-color: #545c64;
}
.el-menu {
  border: none;
}
.el-main {
  padding: 20px  20px;
  background: #e9e9e9;
}
</style>