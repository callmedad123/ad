<template>
  <div id="app">
    
      <router-view v-if="isRouterAlive"></router-view>

  </div>
</template>


<script>
export default {
  provide(){
    return{
      reload:this.reload
    }
  },
  data() {
    return {
      isRouterAlive:true,
    }
  },
  methods: {
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function(){
        this.isRouterAlive=true;
      })
    }
  },


}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
body,html{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.el-table th,.el-table td{//表格内容居中
    text-align: center!important;
}    
.pages .el-pagination.is-background .el-pager li:not(.disabled).active{
  background-color: #1ab394;
    color: #FFF;
}


</style>
