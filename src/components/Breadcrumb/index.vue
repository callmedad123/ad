<template>
  <el-breadcrumb class="app-breadcrumb" separator=">">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if="item.meta.title">
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{item.meta.title}}</span>
        <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name !== 'todo') {
        matched = [{ path: '/home/todo', meta: { title: '首页' }}].concat(matched)
      }
      this.levelList = matched
    }
  }
}
</script>

<style  lang="less" scoped>
  .app-breadcrumb.el-breadcrumb {
     color: #9a9a9a;
    display: inline-block;
    font-size: 14px;
    margin-top:22px;
    .no-redirect {
      color: #9a9a9a;
      cursor: text;
    }
  }
</style>
