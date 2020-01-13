<template>
  <div class="box">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <el-row>
          <!-- logo -->
          <el-col style="width:220px">
            <div class="logo">
              <img src="@/assets/imgs/logo1.png" alt="#" />
              <span style="font-weight:bold;font-size:18px;">广告运营管理端</span>
            </div>
          </el-col>
          <!-- 面包屑 -->
          <el-col  class="text">
            <span>
              <i class="el-icon-s-home"></i>
              您所在的位置 ：
            </span>
          </el-col>
          <el-col :span="14">
            <Breadcrumb />
          </el-col>
          <!-- 消息提示 -->
          <el-col :span="1">
            <el-badge is-dot class="badge">
              <i class="el-icon-chat-dot-square"></i>
            </el-badge>
          </el-col>
          <!-- 用户 -->
            <div class="user">
              <el-dropdown trigger="click" class="username" @command="clickPwd">
                <span class="el-dropdown-link">
                  <i class="el-icon-s-custom"></i>
                  Username
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus" command="a">修改密码</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-switch-button" command="b">退出</el-dropdown-item>
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
import tree from "@/json/tree.json";
import Breadcrumb from "@/components/Breadcrumb";
export default {
  components: {
    Breadcrumb
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
        this.$router.push({path:"/home/pwdchange"});
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
<style lang="less">
.el-badge__content.is-fixed.is-dot {
  top: 18px;
  right: 7px;
}
.btnBg{
    background: #1ab394!important;
    color: #fff !important;
  }
</style>

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
      height: 60px;
      background: #1ab394;
      img {
        margin: 0 5px 0  10px;
        width: 40px;
        height: 20px;
      }
    }
    .text {
      width: 120px;
      color: #9a9a9a;
      font-size: 14px;
      margin-left:20px;
    }
    .user {
     text-align: right;
      font-size: 14px;
      .username {
        margin:0 20px;
        .el-dropdown-link {
          color: #fff;
        }
      }
    }
    .badge {
      height: 60px;
      margin-left: 60px;
      i {
        color: #9a9a9a;
        font-size: 24px;
        margin-top: 15px;
      }
    }
  }
  .home {
    height: 30px;
    line-height: 30px;
  }
}
.box .el-header .user .username .el-dropdown-link {
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
  padding: 20px 20px;
  background: #e9e9e9;
}
</style>