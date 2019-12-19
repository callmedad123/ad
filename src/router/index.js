import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'

Vue.use(VueRouter)
// 解决重复点击导航路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}


const routes = [{
    path: '/', //登录页面
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../pages/Home.vue'),
    children: [{
        path: '/home/todo', //待办事项
        name: 'todo',
        component: () => import('../pages/Todo.vue')
      },
      {
        path: '/home/areamanage', //区域管理
        name: 'areamanage',
        component: () => import('../pages/areaManage/AreaManage.vue')
      },
      {
        path: '/home/machinemanage', //门禁机管理
        name: 'machinemanage',
        component: () => import('../pages/areaManage/MachineManage.vue')
      },
      /* 业务统计 */
      {
        path: '/home/statistical', //投放统计
        name: 'intromsg',
        component: () => import('../pages/business/Statistical.vue')
      },
      {
        path: '/home/record', //投放记录
        name: 'Record',
        component: () => import('../pages/business/Record.vue')
      },
      {
        path: '/home/dayrecord', //查看详情
        name: 'dayrecord',
        component: () => import('../pages/business/DayRecord.vue')
      },
      /*广告主管理 */
      {
        path: '/home/personintro', //基本信息
        name: 'personintro',
        component: () => import('../pages/adPerson/PersonIntro.vue')
      },
      {
        path: '/home/personedit', //管理
        name: 'personedit',
        component: () => import('../pages/adPerson/Personedit.vue')
      },
      {
        path: '/home/newadd', //新增
        name: 'newadd',
        component: () => import('../pages/adPerson/Newadd.vue')
      },
      {
        path: '/home/recharge', //充值记录
        name: 'recharge',
        component: () => import('../pages/adPerson/Recharge.vue')
      },
      {
        path: '/home/consumption', //消费记录
        name: 'consumption',
        component: () => import('../pages/adPerson/Consumption.vue')
      },
      /* 广告投放计划*/
      {
        path: '/home/putmanage', //投放管理
        name: 'putmanage',
        component: () => import('../pages/adPut/PutManage.vue')
      },

      {
        path: '/home/putcontent', //投放明细
        name: 'putcontent',
        component: () => import('../pages/adPut/PutContent.vue')
      },
      {
        path: '/home/putplan', //投放计划
        name: 'putplan',
        component: () => import('../pages/adPut/PutPlan.vue')
      },
      {
        path: '/home/putrecord', //投放记录
        name: 'putrecord',
        component: () => import('../pages/adPut/PutRecord.vue')
      },


      /*广告管理 */
      {
        path: '/home/adcreate', //广告新增
        name: 'adcreate',
        component: () => import('../pages/adManage/AdCreate.vue')
      },
      {
        path: '/home/admanage', //广告管理
        name: 'admanage',
        component: () => import('../pages/adManage/AdManage.vue')
      },
      {
        path: '/home/adaudit', //广告审核
        name: 'adaudit',
        component: () => import('../pages/adManage/AdAudit.vue')
      },
      {
        path: '/home/adedit', //广告修改
        name: 'adedit',
        component: () => import('../pages/adManage/AdEdit.vue')
      },
      {
        path: '/home/adwatch', //查看详情
        name: 'adwatch',
        component: () => import('../pages/adManage/AdWatch.vue')
      },
      {
        path: '/home/operationrecords', //操作记录
        name: 'operationrecords',
        component: () => import('../pages/adManage/OperationRecords.vue')
      },

      /*系统管理 */
      {
        path: '/home/useradd', //用户新增
        name: 'useradd',
        component: () => import('../pages/system/UserAdd.vue')
      },
      {
        path: '/home/usermanage', //用户管理
        name: 'usermanage',
        component: () => import('../pages/system/UserManage.vue')
      },
      {
        path: '/home/pwdchange', //密码修改
        name: 'pwdchange',
        component: () => import('../pages/system/PwdChange.vue')
      },
      {
        path: '/home/rolemanage', //角色管理
        name: 'rolemanage',
        component: () => import('../pages/system/RoleManage.vue')
      },
      {
        path: '/home/roleadd', //角色新增
        name: 'roleadd',
        component: () => import('../pages/system/RoleAdd.vue')
      },


    ]

  },


]

const router = new VueRouter({
  routes
})

export default router